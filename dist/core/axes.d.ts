import * as THREE from 'three';
interface IAxesOption {
    size?: {
        width?: number;
        height?: number;
        depth?: number;
    };
    color?: string;
}
/**
 * createAxes
 * createAxes will create a axes
 * @param option
 */
export declare class createAxes {
    size: {
        width: number;
        height: number;
        depth: number;
    };
    color: string;
    constructor(option?: IAxesOption);
    /**
     * addBox
     * @returns box
     */
    addBox(): THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>;
    /**
     * addAxes
     * @returns axes
     */
    addAxes(): THREE.Group;
    /**
     * getSize
     * @returns size
     */
    getSize(): {
        width: number;
        height: number;
        depth: number;
    };
}
export {};
