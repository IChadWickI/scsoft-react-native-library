// API'den gelen cevap detayları için interface tanımı
export interface ApiMobileDetailsMap {
    status?: boolean;
    success?: boolean;
    message?: string;
    statusCode?: number;
    resourceId?: string;
    returnCode?: string;
    returnDesc?: string;
  }
  
  // API'den gelen cevap detayları için sınıf tanımı
  export class ApiMobileDetails {
    status: boolean;
    success: boolean;
    message: string;
    statusCode: number;
    resourceId: string;
    returnCode: string;
    returnDesc: string;
  
    constructor(map: ApiMobileDetailsMap = {}) {
      this.status = map.status ?? false;
      this.success = map.success ?? false;
      this.message = map.message ?? '';
      this.statusCode = map.statusCode ?? 0;
      this.resourceId = map.resourceId ?? '';
      this.returnCode = map.returnCode ?? '';
      this.returnDesc = map.returnDesc ?? '';
    }
  
    // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot
    get map(): ApiMobileDetailsMap {
      return {
        status: this.status,
        success: this.success,
        message: this.message,
        statusCode: this.statusCode,
        resourceId: this.resourceId,
        returnCode: this.returnCode,
        returnDesc: this.returnDesc,
      };
    }
  }
  