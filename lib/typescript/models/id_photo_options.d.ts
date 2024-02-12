export interface IdPhotoOptionsMap {
    activeColorHex?: string;
    passiveColorHex?: string;
    infoIdInformationText?: string;
    labelTextColorHex?: string;
    labelTextSize?: number;
    cameraFlashState?: boolean;
    buttonCameraActiveImageBase64?: string;
    buttonCameraPassiveImageBase64?: string;
    buttonFlashImageBase64?: string;
    buttonCloseImageBase64?: string;
    hiddenIdPhotoText?: boolean;
    hiddenIdPhotoCameraButton?: boolean;
    hiddenIdPhotoFlashButton?: boolean;
    hiddenCloseButton?: boolean;
}
export declare class IdPhotoOptions {
    activeColorHex: string;
    passiveColorHex: string;
    infoIdInformationText: string;
    labelTextColorHex: string;
    labelTextSize: number;
    cameraFlashState: boolean;
    buttonCameraActiveImageBase64: string;
    buttonCameraPassiveImageBase64: string;
    buttonFlashImageBase64: string;
    buttonCloseImageBase64: string;
    hiddenIdPhotoText: boolean;
    hiddenIdPhotoCameraButton: boolean;
    hiddenIdPhotoFlashButton: boolean;
    hiddenCloseButton: boolean;
    constructor(options?: IdPhotoOptionsMap);
    get map(): {
        [key: string]: string | boolean;
    };
}
