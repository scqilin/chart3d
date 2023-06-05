import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
export class RenderTarget {
    dom: HTMLElement;
    constructor(dom: HTMLElement) {
        this.dom = dom;
    }

    getDomSize() {
        return {
            width: this.dom.offsetWidth || 100,
            height: this.dom.offsetHeight || 100
        }
    }

    createRenderer() {
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        const { width, height } = this.getDomSize();
        renderer.setSize(width, height);
        this.dom.appendChild(renderer.domElement);
        return renderer;
    }



    initScene() {
        if (!this.dom) {
            throw new Error('dom is not defined');
        }
        const { width, height } = this.getDomSize();

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 6;
        camera.position.y = 3;

        const renderer = this.createRenderer();

        const geometry = new THREE.BoxGeometry(3, 3, 3);
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const sphereGeometry = new THREE.SphereGeometry(.5, 32, 32);
        const sphereMaterial = new THREE.MeshNormalMaterial();
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = 3;
        scene.add(sphere);
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        const sk = 1;
        const postCamera = new THREE.OrthographicCamera(-sk, sk, sk, -sk, 0.1, 1000);
        const postScene = new THREE.Scene();
        postCamera.position.z = 10;
        postScene.add(postCamera);

        const planeGeometry = new THREE.PlaneGeometry(sk * 2, sk * 2);

        const renderTarget = new THREE.WebGLRenderTarget(width, height);
        const renderTargetPlane = new THREE.Mesh(planeGeometry, new THREE.ShaderMaterial({
            uniforms: {
                tDiffuse: { value: renderTarget.texture },
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                varying vec2 vUv;
                void main() {
                    float dx = step(0.7, fract(vUv.y * 20.0));
                    vec4 col = texture2D(tDiffuse, vUv);
                    col.r += dx;
                    gl_FragColor = col;
                }
            `,
            transparent: true
        }));

        postScene.add(renderTargetPlane);
        // postScene.add(new THREE.AxesHelper(0.5));
        // scene.add(new THREE.AxesHelper(3));
        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.setRenderTarget(renderTarget);
            renderer.render(scene, camera);
            renderer.setRenderTarget(null);
            renderer.render(postScene, postCamera);
            cube.rotation.y = -clock.getElapsedTime();
            sphere.position.x = Math.sin(clock.getElapsedTime()) * 3;
            sphere.position.z = Math.cos(clock.getElapsedTime()) * 3;

        };

        animate();

        window.addEventListener('resize', () => {
            const { width, height } = this.getDomSize();
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        return scene;

    }
}