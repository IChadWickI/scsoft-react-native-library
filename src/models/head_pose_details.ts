// HeadPoseDetails için TypeScript interface tanımı
export interface HeadPoseDetailsMap {
    base64_image?: string;
    direction?: string;
  }
  
  // HeadPoseDetails sınıfı tanımı
  export class HeadPoseDetails {
    base64_image: string;
    direction: string;
  
    constructor(map: HeadPoseDetailsMap = {}) {
      this.base64_image = map.base64_image ?? '';
      this.direction = map.direction ?? '';
    }
  
    // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot
    get map(): HeadPoseDetailsMap {
      return {
        base64_image: this.base64_image,
        direction: this.direction,
      };
    }
  }
  