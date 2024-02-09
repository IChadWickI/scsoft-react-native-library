// API Mobile Request için interface tanımı
export interface ApiMobileRequestMap {
    base64_autoCropped_idFrontImage?: string;
    base64_autoCropped_idBackImage?: string;
  
    mrz_documentNumber?: string;
    mrz_dateOfBirth?: string;
    mrz_dateOfExpiry?: string;
    mrz_mrzCode?: string;
    mrz_personalNumber?: string;
    mrz_gender?: string;
    mrz_nationality?: string;
    mrz_issuingState?: string;
    mrz_documentCode?: string;
    mrz_optionalData1?: string;
    mrz_optionalData2?: string;
    mrz_primaryIdentifier?: string;
    mrz_secondaryIdentifier?: string;
    mrz_documentType?: string;
  
    nfc_certificate?: string;
    nfc_name?: string;
    nfc_surname?: string;
    nfc_personalNumber?: string;
    nfc_gender?: string;
    nfc_birthDate?: string;
    nfc_expiryDate?: string;
    nfc_serialNumber?: string;
    nfc_nationality?: string;
    nfc_issuerAuthority?: string;
    nfc_faceImageBase64?: string;
    nfc_portraitImageBase64?: string;
    nfc_signatureBase64?: string;
    nfc_documentNumber?: string;
    nfc_custodyInformation?: string;
    nfc_fullDateOfBirth?: string;
    nfc_nameOfHolder?: string;
    nfc_personalNumber2?: string;
    nfc_personalSummary?: string;
    nfc_profession?: string;
    nfc_proofOfCitizenship?: string;
    nfc_telephone?: string;
    nfc_title?: string;
  
    countryCode?: number;
    countryName?: string;
    cityCode?: number;
    cityName?: string;
    districtCode?: number;
    districtName?: string;
    streetCode?: number;
    streetName?: string;
    townCode?: number;
    townName?: string;
    postalCode?: string;
    addressDetail?: string;
  }
  
  // API Mobile Request için sınıf tanımı
  export class ApiMobileRequest {
    base64_autoCropped_idFrontImage: string = "";
    base64_autoCropped_idBackImage: string = "";
  
    mrz_documentNumber: string = "";
    mrz_dateOfBirth: string = "";
    mrz_dateOfExpiry: string = "";
    mrz_mrzCode: string = "";
    mrz_personalNumber: string = "";
    mrz_gender: string = "";
    mrz_nationality: string = "";
    mrz_issuingState: string = "";
    mrz_documentCode: string = "";
    mrz_optionalData1: string = "";
    mrz_optionalData2: string = "";
    mrz_primaryIdentifier: string = "";
    mrz_secondaryIdentifier: string = "";
    mrz_documentType: string = "";
  
    nfc_certificate: string = "";
    nfc_name: string = "";
    nfc_surname: string = "";
    nfc_personalNumber: string = "";
    nfc_gender: string = "";
    nfc_birthDate: string = "";
    nfc_expiryDate: string = "";
    nfc_serialNumber: string = "";
    nfc_nationality: string = "";
    nfc_issuerAuthority: string = "";
    nfc_faceImageBase64: string = "";
    nfc_portraitImageBase64: string = "";
    nfc_signatureBase64: string = "";
    nfc_documentNumber: string = "";
    nfc_custodyInformation: string = "";
    nfc_fullDateOfBirth: string = "";
    nfc_nameOfHolder: string = "";
    nfc_personalNumber2: string = "";
    nfc_personalSummary: string = "";
    nfc_profession: string = "";
    nfc_proofOfCitizenship: string = "";
    nfc_telephone: string = "";
    nfc_title: string = "";
  
    countryCode: number = 0;
    countryName: string = "";
    cityCode: number = 0;
    cityName: string = "";
    districtCode: number = 0;
    districtName: string = "";
    streetCode: number = 0;
    streetName: string = "";
    townCode: number = 0;
    townName: string = "";
    postalCode: string = "";
    addressDetail: string = "";
  
    constructor(map: ApiMobileRequestMap = {}) {
      Object.keys(map).forEach((key) => {
        // @ts-ignore: Next line may produce an unreachable code error
        this[key] = map[key] ?? this[key];
      });
    }
  
    get map(): ApiMobileRequestMap {
      return Object.keys(this).reduce((acc, key) => {
        // @ts-ignore: Next line may produce an unreachable code error
        acc[key] = this[key];
        return acc;
      }, {} as ApiMobileRequestMap);
    }
  }
  