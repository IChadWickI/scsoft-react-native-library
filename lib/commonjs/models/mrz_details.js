"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MrzDetails = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// MrzDetails için TypeScript interface tanımı
// MrzDetails sınıfı tanımı
class MrzDetails {
  constructor() {
    var _map$documentNumber, _map$birthDate, _map$expiryDate, _map$mrzCode, _map$personalNumber, _map$gender, _map$nationality, _map$issuingState, _map$documentCode, _map$optionalData, _map$optionalData2, _map$primaryIdentifie, _map$secondaryIdentif, _map$documentType;

    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "documentNumber", "");

    _defineProperty(this, "birthDate", "");

    _defineProperty(this, "expiryDate", "");

    _defineProperty(this, "mrzCode", "");

    _defineProperty(this, "personalNumber", "");

    _defineProperty(this, "gender", "");

    _defineProperty(this, "nationality", "");

    _defineProperty(this, "issuingState", "");

    _defineProperty(this, "documentCode", "");

    _defineProperty(this, "optionalData1", "");

    _defineProperty(this, "optionalData2", "");

    _defineProperty(this, "primaryIdentifier", "");

    _defineProperty(this, "secondaryIdentifier", "");

    _defineProperty(this, "documentType", "");

    this.documentNumber = (_map$documentNumber = map.documentNumber) !== null && _map$documentNumber !== void 0 ? _map$documentNumber : '';
    this.birthDate = (_map$birthDate = map.birthDate) !== null && _map$birthDate !== void 0 ? _map$birthDate : '';
    this.expiryDate = (_map$expiryDate = map.expiryDate) !== null && _map$expiryDate !== void 0 ? _map$expiryDate : '';
    this.mrzCode = (_map$mrzCode = map.mrzCode) !== null && _map$mrzCode !== void 0 ? _map$mrzCode : '';
    this.personalNumber = (_map$personalNumber = map.personalNumber) !== null && _map$personalNumber !== void 0 ? _map$personalNumber : '';
    this.gender = (_map$gender = map.gender) !== null && _map$gender !== void 0 ? _map$gender : '';
    this.nationality = (_map$nationality = map.nationality) !== null && _map$nationality !== void 0 ? _map$nationality : '';
    this.issuingState = (_map$issuingState = map.issuingState) !== null && _map$issuingState !== void 0 ? _map$issuingState : '';
    this.documentCode = (_map$documentCode = map.documentCode) !== null && _map$documentCode !== void 0 ? _map$documentCode : '';
    this.optionalData1 = (_map$optionalData = map.optionalData1) !== null && _map$optionalData !== void 0 ? _map$optionalData : '';
    this.optionalData2 = (_map$optionalData2 = map.optionalData2) !== null && _map$optionalData2 !== void 0 ? _map$optionalData2 : '';
    this.primaryIdentifier = (_map$primaryIdentifie = map.primaryIdentifier) !== null && _map$primaryIdentifie !== void 0 ? _map$primaryIdentifie : '';
    this.secondaryIdentifier = (_map$secondaryIdentif = map.secondaryIdentifier) !== null && _map$secondaryIdentif !== void 0 ? _map$secondaryIdentif : '';
    this.documentType = (_map$documentType = map.documentType) !== null && _map$documentType !== void 0 ? _map$documentType : '';
  } // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot


  get map() {
    return {
      documentNumber: this.documentNumber,
      birthDate: this.birthDate,
      expiryDate: this.expiryDate,
      mrzCode: this.mrzCode,
      personalNumber: this.personalNumber,
      gender: this.gender,
      nationality: this.nationality,
      issuingState: this.issuingState,
      documentCode: this.documentCode,
      optionalData1: this.optionalData1,
      optionalData2: this.optionalData2,
      primaryIdentifier: this.primaryIdentifier,
      secondaryIdentifier: this.secondaryIdentifier,
      documentType: this.documentType
    };
  }

}

exports.MrzDetails = MrzDetails;
//# sourceMappingURL=mrz_details.js.map