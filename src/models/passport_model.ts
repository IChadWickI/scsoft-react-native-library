// PassportModel için TypeScript interface tanımı
export interface PassportModelMap {
  docType?: string;
  mrzText?: string;
  fullName?: string;
  certificate?: string;
  name?: string;
  surname?: string;
  personalNumber?: string;
  gender?: string;
  birthDate?: string;
  expiryDate?: string;
  serialNumber?: string;
  nationality?: string;
  issuerAuthority?: string;
  faceImageBase64?: string;
  portraitImageBase64?: string;
  signatureBase64?: string;
  documentNumber?: string;
  custodyInformation?: string;
  fullDateOfBirth?: string;
  nameOfHolder?: string;
  personalNumber2?: string;
  personalSummary?: string;
  profession?: string;
  proofOfCitizenship?: string;
  telephone?: string;
  title?: string;
  }
  
  // PassportModel sınıfı tanımı
  export class PassportModel {
    static fromMap(map: PassportModelMap): PassportModel {
      return new PassportModel(map);
    }
    docType: string = "";
    mrzText: string = "";
    fullName: string = "";
    certificate: string = "";
    name: string = "";
    surname: string = "";
    personalNumber: string = "";
    gender: string = "";
    birthDate: string = "";
    expiryDate: string = "";
    serialNumber: string = "";
    nationality: string = "";
    issuerAuthority: string = "";
    faceImageBase64: string = "";
    portraitImageBase64: string = "";
    signatureBase64: string = "";
    documentNumber: string = "";
    custodyInformation: string = "";
    fullDateOfBirth: string = "";
    nameOfHolder: string = "";
    personalNumber2: string = "";
    personalSummary: string = "";
    profession: string = "";
    proofOfCitizenship: string = "";
    telephone: string = "";
    title: string = "";
  
    constructor(map: PassportModelMap = {}) {
      Object.keys(map).forEach((key) => {
        // @ts-expect-error Ignore the unreachable code error
        this[key] = map[key] ?? this[key];
      });
    }
  
    // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot
    get map(): PassportModelMap {
      return Object.keys(this).reduce((acc, key) => {
        // @ts-expect-error Ignore the unreachable code error
        acc[key] = this[key];
        return acc;
      }, {} as PassportModelMap);
    }
  }
  