"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressDetails = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Adres detayları için sınıf tanımı
class AddressDetails {
  constructor() {
    var _map$countryCode, _map$countryName, _map$cityCode, _map$cityName, _map$districtCode, _map$districtName, _map$streetCode, _map$streetName, _map$townCode, _map$townName, _map$postalCode, _map$addressDetail;

    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "countryCode", void 0);

    _defineProperty(this, "countryName", void 0);

    _defineProperty(this, "cityCode", void 0);

    _defineProperty(this, "cityName", void 0);

    _defineProperty(this, "districtCode", void 0);

    _defineProperty(this, "districtName", void 0);

    _defineProperty(this, "streetCode", void 0);

    _defineProperty(this, "streetName", void 0);

    _defineProperty(this, "townCode", void 0);

    _defineProperty(this, "townName", void 0);

    _defineProperty(this, "postalCode", void 0);

    _defineProperty(this, "addressDetail", void 0);

    this.countryCode = (_map$countryCode = map.countryCode) !== null && _map$countryCode !== void 0 ? _map$countryCode : 0;
    this.countryName = (_map$countryName = map.countryName) !== null && _map$countryName !== void 0 ? _map$countryName : '';
    this.cityCode = (_map$cityCode = map.cityCode) !== null && _map$cityCode !== void 0 ? _map$cityCode : 0;
    this.cityName = (_map$cityName = map.cityName) !== null && _map$cityName !== void 0 ? _map$cityName : '';
    this.districtCode = (_map$districtCode = map.districtCode) !== null && _map$districtCode !== void 0 ? _map$districtCode : 0;
    this.districtName = (_map$districtName = map.districtName) !== null && _map$districtName !== void 0 ? _map$districtName : '';
    this.streetCode = (_map$streetCode = map.streetCode) !== null && _map$streetCode !== void 0 ? _map$streetCode : 0;
    this.streetName = (_map$streetName = map.streetName) !== null && _map$streetName !== void 0 ? _map$streetName : '';
    this.townCode = (_map$townCode = map.townCode) !== null && _map$townCode !== void 0 ? _map$townCode : 0;
    this.townName = (_map$townName = map.townName) !== null && _map$townName !== void 0 ? _map$townName : '';
    this.postalCode = (_map$postalCode = map.postalCode) !== null && _map$postalCode !== void 0 ? _map$postalCode : '';
    this.addressDetail = (_map$addressDetail = map.addressDetail) !== null && _map$addressDetail !== void 0 ? _map$addressDetail : '';
  }

}

exports.AddressDetails = AddressDetails;
//# sourceMappingURL=address_details.js.map