import { AddressDetails, AddressDetailsMap } from "./address_details";
import { MrzDetails, MrzDetailsMap } from "./mrz_details";
import { NfcDetails, NfcDetailsMap } from "./nfc_details";
export interface ApiMobileOptionsMap {
    base64_autoCropped_idFrontImage?: string;
    base64_autoCropped_idBackImage?: string;
    mrzDetails?: MrzDetailsMap;
    nfcDetails?: NfcDetailsMap;
    addressDetails?: AddressDetailsMap;
}
export declare class ApiMobileOptions {
    base64_autoCropped_idFrontImage: string;
    base64_autoCropped_idBackImage: string;
    mrzDetails?: MrzDetails;
    nfcDetails?: NfcDetails;
    addressDetails?: AddressDetails;
    constructor(map?: ApiMobileOptionsMap);
}
