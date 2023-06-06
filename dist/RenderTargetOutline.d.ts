import * as THREE from 'three';
import { BasicScene } from './core/scene';
export declare class RenderTargetOutline extends BasicScene {
    clock: THREE.Clock;
    postCamera: THREE.OrthographicCamera;
    postScene: THREE.Scene;
    renderTarget: THREE.WebGLRenderTarget;
    cube: THREE.Mesh;
    sphere: THREE.Mesh;
    constructor(dom: HTMLElement);
    render: () => void;
}
