export interface HeadPoseDetailsMap {
    base64_image?: string;
    direction?: string;
}
export declare class HeadPoseDetails {
    base64_image: string;
    direction: string;
    constructor(map?: HeadPoseDetailsMap);
    get map(): HeadPoseDetailsMap;
}
