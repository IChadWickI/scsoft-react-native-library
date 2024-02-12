import { PassportModel, PassportModelMap } from './passport_model';
export interface NfcDetailsMap {
    hasNfc?: boolean;
    passportModel?: PassportModelMap;
}
export declare class NfcDetails {
    hasNfc: boolean;
    passportModel?: PassportModel;
    constructor(map?: NfcDetailsMap);
    get map(): NfcDetailsMap;
}
