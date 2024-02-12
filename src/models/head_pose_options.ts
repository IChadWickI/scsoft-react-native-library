// HeadPoseOptions için TypeScript interface tanımı
export interface HeadPoseOptionsMap {
    direction?: string;
  }
  
  // HeadPoseOptions sınıfı tanımı
  export class HeadPoseOptions {
    direction: string;
  
    constructor(options: HeadPoseOptionsMap = { direction: 'left' }) {
      this.direction = options.direction ?? 'left';
    }
  
    // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot
    get map(): HeadPoseOptionsMap {
      return {
        direction: this.direction,
      };
    }
  }
  