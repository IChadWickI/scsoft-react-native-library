// Önceki mesajlarda tanımlanan TypeScript sınıfları ve interface'leri varsayılarak başlanmıştır.

import { AddressDetails, AddressDetailsMap } from "./address_details";
import { MrzDetails,MrzDetailsMap } from "./mrz_details";
import { NfcDetails,NfcDetailsMap } from "./nfc_details";

// ApiMobileOptions için TypeScript interface tanımı
interface ApiMobileOptionsMap {
    base64_autoCropped_idFrontImage?: string;
    base64_autoCropped_idBackImage?: string;
    mrzDetails?: MrzDetailsMap;
    nfcDetails?: NfcDetailsMap;
    addressDetails?: AddressDetailsMap;
  }
  
  // ApiMobileOptions sınıfı tanımı
  class ApiMobileOptions {
    base64_autoCropped_idFrontImage: string = "";
    base64_autoCropped_idBackImage: string = "";
  
    mrzDetails?: MrzDetails;
    nfcDetails?: NfcDetails;
    addressDetails?: AddressDetails;
  
    constructor(map: ApiMobileOptionsMap = {}) {
      this.base64_autoCropped_idFrontImage = map.base64_autoCropped_idFrontImage ?? '';
      this.base64_autoCropped_idBackImage = map.base64_autoCropped_idBackImage ?? '';
      
      if (map.mrzDetails) {
        this.mrzDetails = new MrzDetails(map.mrzDetails);
      }
      
      if (map.nfcDetails) {
        this.nfcDetails = new NfcDetails(map.nfcDetails);
      }
      
      if (map.addressDetails) {
        this.addressDetails = new AddressDetails(map.addressDetails);
      }
    }
  }
  