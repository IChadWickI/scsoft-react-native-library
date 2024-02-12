export interface NfcOptionsMap {
    documentNumber?: string;
    dateOfBirth?: string;
    dateOfExpiry?: string;
}
export declare class NfcOptions {
    documentNumber: string;
    dateOfBirth: string;
    dateOfExpiry: string;
    constructor(options?: NfcOptionsMap);
    get map(): NfcOptionsMap;
}
