"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiMobileRequest = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// API Mobile Request için interface tanımı
// API Mobile Request için sınıf tanımı
class ApiMobileRequest {
  constructor() {
    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "base64_autoCropped_idFrontImage", "");

    _defineProperty(this, "base64_autoCropped_idBackImage", "");

    _defineProperty(this, "mrz_documentNumber", "");

    _defineProperty(this, "mrz_dateOfBirth", "");

    _defineProperty(this, "mrz_dateOfExpiry", "");

    _defineProperty(this, "mrz_mrzCode", "");

    _defineProperty(this, "mrz_personalNumber", "");

    _defineProperty(this, "mrz_gender", "");

    _defineProperty(this, "mrz_nationality", "");

    _defineProperty(this, "mrz_issuingState", "");

    _defineProperty(this, "mrz_documentCode", "");

    _defineProperty(this, "mrz_optionalData1", "");

    _defineProperty(this, "mrz_optionalData2", "");

    _defineProperty(this, "mrz_primaryIdentifier", "");

    _defineProperty(this, "mrz_secondaryIdentifier", "");

    _defineProperty(this, "mrz_documentType", "");

    _defineProperty(this, "nfc_certificate", "");

    _defineProperty(this, "nfc_name", "");

    _defineProperty(this, "nfc_surname", "");

    _defineProperty(this, "nfc_personalNumber", "");

    _defineProperty(this, "nfc_gender", "");

    _defineProperty(this, "nfc_birthDate", "");

    _defineProperty(this, "nfc_expiryDate", "");

    _defineProperty(this, "nfc_serialNumber", "");

    _defineProperty(this, "nfc_nationality", "");

    _defineProperty(this, "nfc_issuerAuthority", "");

    _defineProperty(this, "nfc_faceImageBase64", "");

    _defineProperty(this, "nfc_portraitImageBase64", "");

    _defineProperty(this, "nfc_signatureBase64", "");

    _defineProperty(this, "nfc_documentNumber", "");

    _defineProperty(this, "nfc_custodyInformation", "");

    _defineProperty(this, "nfc_fullDateOfBirth", "");

    _defineProperty(this, "nfc_nameOfHolder", "");

    _defineProperty(this, "nfc_personalNumber2", "");

    _defineProperty(this, "nfc_personalSummary", "");

    _defineProperty(this, "nfc_profession", "");

    _defineProperty(this, "nfc_proofOfCitizenship", "");

    _defineProperty(this, "nfc_telephone", "");

    _defineProperty(this, "nfc_title", "");

    _defineProperty(this, "countryCode", 0);

    _defineProperty(this, "countryName", "");

    _defineProperty(this, "cityCode", 0);

    _defineProperty(this, "cityName", "");

    _defineProperty(this, "districtCode", 0);

    _defineProperty(this, "districtName", "");

    _defineProperty(this, "streetCode", 0);

    _defineProperty(this, "streetName", "");

    _defineProperty(this, "townCode", 0);

    _defineProperty(this, "townName", "");

    _defineProperty(this, "postalCode", "");

    _defineProperty(this, "addressDetail", "");

    Object.keys(map).forEach(key => {
      var _map$key;

      // @ts-ignore: Next line may produce an unreachable code error
      this[key] = (_map$key = map[key]) !== null && _map$key !== void 0 ? _map$key : this[key];
    });
  }

  get map() {
    return Object.keys(this).reduce((acc, key) => {
      // @ts-ignore: Next line may produce an unreachable code error
      acc[key] = this[key];
      return acc;
    }, {});
  }

}

exports.ApiMobileRequest = ApiMobileRequest;
//# sourceMappingURL=api_mobile_request.js.map