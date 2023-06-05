import * as THREE from 'three';
export declare class RenderTarget {
    dom: HTMLElement;
    constructor(dom: HTMLElement);
    getDomSize(): {
        width: number;
        height: number;
    };
    createRenderer(): THREE.WebGLRenderer;
    initScene(): THREE.Scene;
}
