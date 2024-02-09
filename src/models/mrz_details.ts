// MrzDetails için TypeScript interface tanımı
export interface MrzDetailsMap {
    documentNumber?: string;
    birthDate?: string;
    expiryDate?: string;
    mrzCode?: string;
    personalNumber?: string;
    gender?: string;
    nationality?: string;
    issuingState?: string;
    documentCode?: string;
    optionalData1?: string;
    optionalData2?: string;
    primaryIdentifier?: string;
    secondaryIdentifier?: string;
    documentType?: string;
  }
  
  // MrzDetails sınıfı tanımı
  export class MrzDetails {
    documentNumber: string = "";
    birthDate: string = "";
    expiryDate: string = "";
    mrzCode: string = "";
    personalNumber: string = "";
    gender: string = "";
    nationality: string = "";
    issuingState: string = "";
    documentCode: string = "";
    optionalData1: string = "";
    optionalData2: string = "";
    primaryIdentifier: string = "";
    secondaryIdentifier: string = "";
    documentType: string = "";
  
    constructor(map: MrzDetailsMap = {}) {
      this.documentNumber = map.documentNumber ?? '';
      this.birthDate = map.birthDate ?? '';
      this.expiryDate = map.expiryDate ?? '';
      this.mrzCode = map.mrzCode ?? '';
      this.personalNumber = map.personalNumber ?? '';
      this.gender = map.gender ?? '';
      this.nationality = map.nationality ?? '';
      this.issuingState = map.issuingState ?? '';
      this.documentCode = map.documentCode ?? '';
      this.optionalData1 = map.optionalData1 ?? '';
      this.optionalData2 = map.optionalData2 ?? '';
      this.primaryIdentifier = map.primaryIdentifier ?? '';
      this.secondaryIdentifier = map.secondaryIdentifier ?? '';
      this.documentType = map.documentType ?? '';
    }
  
    // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot
    get map(): MrzDetailsMap {
      return {
        documentNumber: this.documentNumber,
        birthDate: this.birthDate,
        expiryDate: this.expiryDate,
        mrzCode: this.mrzCode,
        personalNumber: this.personalNumber,
        gender: this.gender,
        nationality: this.nationality,
        issuingState: this.issuingState,
        documentCode: this.documentCode,
        optionalData1: this.optionalData1,
        optionalData2: this.optionalData2,
        primaryIdentifier: this.primaryIdentifier,
        secondaryIdentifier: this.secondaryIdentifier,
        documentType: this.documentType,
      };
    }
  }
  