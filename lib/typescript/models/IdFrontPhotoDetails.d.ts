export interface IdFrontPhotoDetailsMap {
    base64_idFrontImage?: string;
    base64_autoCropped_idFrontImage?: string;
    base64_idFrontFaceImage?: string;
}
export declare class IdFrontPhotoDetails {
    base64_idFrontImage: string;
    base64_autoCropped_idFrontImage: string;
    base64_idFrontFaceImage: string;
    constructor(map: IdFrontPhotoDetailsMap);
}
