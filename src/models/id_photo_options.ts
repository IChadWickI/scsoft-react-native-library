// IdPhotoOptions için TypeScript interface tanımı
interface IdPhotoOptionsMap {
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
  
  // IdPhotoOptions sınıfı tanımı
  class IdPhotoOptions {
    activeColorHex: string = "";
    passiveColorHex: string = "";
  
    infoIdInformationText: string = "";
    labelTextColorHex: string = "";
    labelTextSize: number = 18;
  
    cameraFlashState: boolean = false;
    buttonCameraActiveImageBase64: string = "";
    buttonCameraPassiveImageBase64: string = "";
    buttonFlashImageBase64: string = "";
    buttonCloseImageBase64: string = "";
  
    hiddenIdPhotoText: boolean = false;
    hiddenIdPhotoCameraButton: boolean = false;
    hiddenIdPhotoFlashButton: boolean = false;
    hiddenCloseButton: boolean = false;
  
    constructor(options: IdPhotoOptionsMap = {}) {
      Object.assign(this, options);
    }
  
    // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot
    get map(): { [key: string]: string | boolean } {
      return {
        activeColorHex: this.activeColorHex,
        passiveColorHex: this.passiveColorHex,
        infoIdInformationText: this.infoIdInformationText,
        labelTextColorHex: this.labelTextColorHex,
        labelTextSize: this.labelTextSize.toString(),
        cameraFlashState: this.cameraFlashState.toString(),
        buttonCameraActiveImageBase64: this.buttonCameraActiveImageBase64,
        buttonCameraPassiveImageBase64: this.buttonCameraPassiveImageBase64,
        buttonFlashImageBase64: this.buttonFlashImageBase64,
        buttonCloseImageBase64: this.buttonCloseImageBase64,
        hiddenIdPhotoText: this.hiddenIdPhotoText.toString(),
        hiddenIdPhotoCameraButton: this.hiddenIdPhotoCameraButton.toString(),
        hiddenIdPhotoFlashButton: this.hiddenIdPhotoFlashButton.toString(),
        hiddenCloseButton: this.hiddenCloseButton.toString(),
      };
    }
  }
  