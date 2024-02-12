export interface HeadPoseOptionsMap {
    direction?: string;
}
export declare class HeadPoseOptions {
    direction: string;
    constructor(options?: HeadPoseOptionsMap);
    get map(): HeadPoseOptionsMap;
}
