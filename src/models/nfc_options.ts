// NfcOptions için TypeScript interface tanımı
export interface NfcOptionsMap {
    documentNumber?: string;
    dateOfBirth?: string;
    dateOfExpiry?: string;
  }
  
  // NfcOptions sınıfı tanımı
  export class NfcOptions {
    documentNumber: string = "";
    dateOfBirth: string = "";
    dateOfExpiry: string = "";
  
    constructor(options: NfcOptionsMap = {}) {
      this.documentNumber = options.documentNumber ?? '';
      this.dateOfBirth = options.dateOfBirth ?? '';
      this.dateOfExpiry = options.dateOfExpiry ?? '';
    }
  
    // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot
    get map(): NfcOptionsMap {
      return {
        documentNumber: this.documentNumber,
        dateOfBirth: this.dateOfBirth,
        dateOfExpiry: this.dateOfExpiry,
      };
    }
  }
  