import * as THREE from 'three';
/**
* BasicScene
* BasicScene is a basic scene class
* It will create a scene, a camera, a renderer
* and append the renderer.domElement to the dom
* @param dom
*/
export declare class BasicScene {
    dom: HTMLElement;
    camera: THREE.PerspectiveCamera;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    constructor(dom: HTMLElement);
    /**
     * render
     */
    protected render: () => void;
    /**
    * render others
    */
    protected renderOthers(): void;
    /**
    * get dom size
    */
    getDomSize(): {
        width: number;
        height: number;
    };
    /**
    * resize renderer
    */
    resize(): void;
}
