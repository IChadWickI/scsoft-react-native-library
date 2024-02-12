"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NfcDetails = void 0;

var _passport_model = require("./passport_model");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// NfcDetails sınıfı tanımı
class NfcDetails {
  constructor() {
    var _map$hasNfc;

    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "hasNfc", false);

    _defineProperty(this, "passportModel", void 0);

    this.hasNfc = (_map$hasNfc = map.hasNfc) !== null && _map$hasNfc !== void 0 ? _map$hasNfc : false;

    if (map.passportModel) {
      this.passportModel = _passport_model.PassportModel.fromMap(map.passportModel);
    }
  }

  get map() {
    var _this$passportModel;

    return {
      hasNfc: this.hasNfc,
      passportModel: (_this$passportModel = this.passportModel) === null || _this$passportModel === void 0 ? void 0 : _this$passportModel.map
    };
  }

}

exports.NfcDetails = NfcDetails;
//# sourceMappingURL=nfc_details.js.map