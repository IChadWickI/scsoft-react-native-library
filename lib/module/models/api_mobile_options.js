function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Önceki mesajlarda tanımlanan TypeScript sınıfları ve interface'leri varsayılarak başlanmıştır.
import { AddressDetails } from "./address_details";
import { MrzDetails } from "./mrz_details";
import { NfcDetails } from "./nfc_details"; // ApiMobileOptions için TypeScript interface tanımı

// ApiMobileOptions sınıfı tanımı
export class ApiMobileOptions {
  constructor() {
    var _map$base64_autoCropp, _map$base64_autoCropp2;

    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "base64_autoCropped_idFrontImage", "");

    _defineProperty(this, "base64_autoCropped_idBackImage", "");

    _defineProperty(this, "mrzDetails", void 0);

    _defineProperty(this, "nfcDetails", void 0);

    _defineProperty(this, "addressDetails", void 0);

    this.base64_autoCropped_idFrontImage = (_map$base64_autoCropp = map.base64_autoCropped_idFrontImage) !== null && _map$base64_autoCropp !== void 0 ? _map$base64_autoCropp : '';
    this.base64_autoCropped_idBackImage = (_map$base64_autoCropp2 = map.base64_autoCropped_idBackImage) !== null && _map$base64_autoCropp2 !== void 0 ? _map$base64_autoCropp2 : '';

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
//# sourceMappingURL=api_mobile_options.js.map