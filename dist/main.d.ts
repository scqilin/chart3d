import * as THREE from 'three';
export default class Charts3d {
    dom: HTMLElement;
    constructor(dom: HTMLElement);
    init(): void;
    getDomSize(): {
        width: number;
        height: number;
    };
    createScene(): THREE.Scene;
    createCamera(): THREE.PerspectiveCamera;
    createRenderer(): THREE.WebGLRenderer;
    createLight(): THREE.AmbientLight;
    createCube(): THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>;
    initScene(): THREE.Scene;
}
