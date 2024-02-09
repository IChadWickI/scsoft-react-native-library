// SelfiePhotoDetails için TypeScript interface tanımı
export interface SelfiePhotoDetailsMap {
    base64_selfieImage?: string;
    base64_autoCropped_selfieImage?: string;
  }
  
  // SelfiePhotoDetails sınıfı tanımı
  export class SelfiePhotoDetails {
    base64_selfieImage: string = "";
    base64_autoCropped_selfieImage: string = "";
  
    constructor(map: SelfiePhotoDetailsMap = {}) {
      this.base64_selfieImage = map.base64_selfieImage ?? '';
      this.base64_autoCropped_selfieImage = map.base64_autoCropped_selfieImage ?? '';
    }
  
    // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot
    get map(): SelfiePhotoDetailsMap {
      return {
        base64_selfieImage: this.base64_selfieImage,
        base64_autoCropped_selfieImage: this.base64_autoCropped_selfieImage,
      };
    }
  }
  