export interface SelfiePhotoDetailsMap {
    base64_selfieImage?: string;
    base64_autoCropped_selfieImage?: string;
}
export declare class SelfiePhotoDetails {
    base64_selfieImage: string;
    base64_autoCropped_selfieImage: string;
    constructor(map?: SelfiePhotoDetailsMap);
    get map(): SelfiePhotoDetailsMap;
}
