function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// PassportModel için TypeScript interface tanımı
// PassportModel sınıfı tanımı
export class PassportModel {
  static fromMap(map) {
    return new PassportModel(map);
  }

  constructor() {
    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "docType", "");

    _defineProperty(this, "mrzText", "");

    _defineProperty(this, "fullName", "");

    _defineProperty(this, "certificate", "");

    _defineProperty(this, "name", "");

    _defineProperty(this, "surname", "");

    _defineProperty(this, "personalNumber", "");

    _defineProperty(this, "gender", "");

    _defineProperty(this, "birthDate", "");

    _defineProperty(this, "expiryDate", "");

    _defineProperty(this, "serialNumber", "");

    _defineProperty(this, "nationality", "");

    _defineProperty(this, "issuerAuthority", "");

    _defineProperty(this, "faceImageBase64", "");

    _defineProperty(this, "portraitImageBase64", "");

    _defineProperty(this, "signatureBase64", "");

    _defineProperty(this, "documentNumber", "");

    _defineProperty(this, "custodyInformation", "");

    _defineProperty(this, "fullDateOfBirth", "");

    _defineProperty(this, "nameOfHolder", "");

    _defineProperty(this, "personalNumber2", "");

    _defineProperty(this, "personalSummary", "");

    _defineProperty(this, "profession", "");

    _defineProperty(this, "proofOfCitizenship", "");

    _defineProperty(this, "telephone", "");

    _defineProperty(this, "title", "");

    Object.keys(map).forEach(key => {
      var _map$key;

      // @ts-expect-error Ignore the unreachable code error
      this[key] = (_map$key = map[key]) !== null && _map$key !== void 0 ? _map$key : this[key];
    });
  } // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot


  get map() {
    return Object.keys(this).reduce((acc, key) => {
      // @ts-expect-error Ignore the unreachable code error
      acc[key] = this[key];
      return acc;
    }, {});
  }

}
//# sourceMappingURL=passport_model.js.map