function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// NfcOptions için TypeScript interface tanımı
// NfcOptions sınıfı tanımı
export class NfcOptions {
  constructor() {
    var _options$documentNumb, _options$dateOfBirth, _options$dateOfExpiry;

    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "documentNumber", "");

    _defineProperty(this, "dateOfBirth", "");

    _defineProperty(this, "dateOfExpiry", "");

    this.documentNumber = (_options$documentNumb = options.documentNumber) !== null && _options$documentNumb !== void 0 ? _options$documentNumb : '';
    this.dateOfBirth = (_options$dateOfBirth = options.dateOfBirth) !== null && _options$dateOfBirth !== void 0 ? _options$dateOfBirth : '';
    this.dateOfExpiry = (_options$dateOfExpiry = options.dateOfExpiry) !== null && _options$dateOfExpiry !== void 0 ? _options$dateOfExpiry : '';
  } // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot


  get map() {
    return {
      documentNumber: this.documentNumber,
      dateOfBirth: this.dateOfBirth,
      dateOfExpiry: this.dateOfExpiry
    };
  }

}
//# sourceMappingURL=nfc_options.js.map