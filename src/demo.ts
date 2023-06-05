import * as THREE from 'three';
export class Demo {
  dom: HTMLElement;
  constructor(dom: HTMLElement) {
    this.dom = dom;
    this.init();
  }

  init() {
    console.log('Charts3d');
  }

  getDomSize() {
    return {
      width: this.dom.offsetWidth || 100,
      height: this.dom.offsetHeight || 100
    }
  }

  createScene() {
    const scene = new THREE.Scene();
    return scene;
  }

  createCamera() {
    const { width, height } = this.getDomSize();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    return camera;
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

  createLight() {
    const light = new THREE.AmbientLight(0x404040);
    return light;
  }

  createCube() {
    const geometry = new THREE.BoxGeometry(3,3,3);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    return cube;
  }

  initScene() {
    if (!this.dom) {
      throw new Error('dom is not defined');
    }
    const scene = this.createScene();
    const camera = this.createCamera();
    const renderer = this.createRenderer();
    const light = this.createLight();
    const cube = this.createCube();

    scene.add(light);
    scene.add(cube);

    camera.position.z = 6;
    camera.position.y = 3;
    camera.lookAt(0, 0, 0);
    // scene.add(new THREE.AxesHelper(3));
    const animate = function () {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    };

    animate();

    window.addEventListener('resize', () => {
      const { width, height } = this.getDomSize();
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    );

    return scene;

  }
}