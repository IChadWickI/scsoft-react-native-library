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
export declare class MrzDetails {
    documentNumber: string;
    birthDate: string;
    expiryDate: string;
    mrzCode: string;
    personalNumber: string;
    gender: string;
    nationality: string;
    issuingState: string;
    documentCode: string;
    optionalData1: string;
    optionalData2: string;
    primaryIdentifier: string;
    secondaryIdentifier: string;
    documentType: string;
    constructor(map?: MrzDetailsMap);
    get map(): MrzDetailsMap;
}
