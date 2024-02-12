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
export declare class PassportModel {
    static fromMap(map: PassportModelMap): PassportModel;
    docType: string;
    mrzText: string;
    fullName: string;
    certificate: string;
    name: string;
    surname: string;
    personalNumber: string;
    gender: string;
    birthDate: string;
    expiryDate: string;
    serialNumber: string;
    nationality: string;
    issuerAuthority: string;
    faceImageBase64: string;
    portraitImageBase64: string;
    signatureBase64: string;
    documentNumber: string;
    custodyInformation: string;
    fullDateOfBirth: string;
    nameOfHolder: string;
    personalNumber2: string;
    personalSummary: string;
    profession: string;
    proofOfCitizenship: string;
    telephone: string;
    title: string;
    constructor(map?: PassportModelMap);
    get map(): PassportModelMap;
}