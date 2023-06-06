import * as THREE from 'three';
import { BasicScene } from './core/scene';
export declare class Demo extends BasicScene {
    cube: THREE.Mesh;
    clock: THREE.Clock;
    constructor(dom: HTMLElement);
    protected renderOthers(): void;
}
