"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiMobileDetails = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// API'den gelen cevap detayları için interface tanımı
// API'den gelen cevap detayları için sınıf tanımı
class ApiMobileDetails {
  constructor() {
    var _map$status, _map$success, _map$message, _map$statusCode, _map$resourceId, _map$returnCode, _map$returnDesc;

    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "status", void 0);

    _defineProperty(this, "success", void 0);

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "statusCode", void 0);

    _defineProperty(this, "resourceId", void 0);

    _defineProperty(this, "returnCode", void 0);

    _defineProperty(this, "returnDesc", void 0);

    this.status = (_map$status = map.status) !== null && _map$status !== void 0 ? _map$status : false;
    this.success = (_map$success = map.success) !== null && _map$success !== void 0 ? _map$success : false;
    this.message = (_map$message = map.message) !== null && _map$message !== void 0 ? _map$message : '';
    this.statusCode = (_map$statusCode = map.statusCode) !== null && _map$statusCode !== void 0 ? _map$statusCode : 0;
    this.resourceId = (_map$resourceId = map.resourceId) !== null && _map$resourceId !== void 0 ? _map$resourceId : '';
    this.returnCode = (_map$returnCode = map.returnCode) !== null && _map$returnCode !== void 0 ? _map$returnCode : '';
    this.returnDesc = (_map$returnDesc = map.returnDesc) !== null && _map$returnDesc !== void 0 ? _map$returnDesc : '';
  } // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot


  get map() {
    return {
      status: this.status,
      success: this.success,
      message: this.message,
      statusCode: this.statusCode,
      resourceId: this.resourceId,
      returnCode: this.returnCode,
      returnDesc: this.returnDesc
    };
  }

}

exports.ApiMobileDetails = ApiMobileDetails;
//# sourceMappingURL=api_mobile_details.js.map