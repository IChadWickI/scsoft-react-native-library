"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdBackPhotoDetails = void 0;

var _mrz_details = require("./mrz_details");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// IdBackPhotoDetails sınıfı tanımı
class IdBackPhotoDetails {
  constructor() {
    var _map$base64_idBackIma, _map$base64_autoCropp, _map$idCardAgeOver, _map$didAfterMrzCheck;

    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "base64_idBackImage", "");

    _defineProperty(this, "base64_autoCropped_idBackImage", "");

    _defineProperty(this, "idCardAgeOver18", true);

    _defineProperty(this, "didAfterMrzCheck", false);

    _defineProperty(this, "mrzInformation", void 0);

    this.base64_idBackImage = (_map$base64_idBackIma = map.base64_idBackImage) !== null && _map$base64_idBackIma !== void 0 ? _map$base64_idBackIma : '';
    this.base64_autoCropped_idBackImage = (_map$base64_autoCropp = map.base64_autoCropped_idBackImage) !== null && _map$base64_autoCropp !== void 0 ? _map$base64_autoCropp : '';
    this.idCardAgeOver18 = (_map$idCardAgeOver = map.idCardAgeOver18) !== null && _map$idCardAgeOver !== void 0 ? _map$idCardAgeOver : true;
    this.didAfterMrzCheck = (_map$didAfterMrzCheck = map.didAfterMrzCheck) !== null && _map$didAfterMrzCheck !== void 0 ? _map$didAfterMrzCheck : false;

    if (map.mrzInformation) {
      this.mrzInformation = new _mrz_details.MrzDetails(map.mrzInformation);
    }
  }

  get map() {
    var _this$mrzInformation;

    return {
      base64_idBackImage: this.base64_idBackImage,
      base64_autoCropped_idBackImage: this.base64_autoCropped_idBackImage,
      idCardAgeOver18: this.idCardAgeOver18,
      didAfterMrzCheck: this.didAfterMrzCheck,
      mrzInformation: (_this$mrzInformation = this.mrzInformation) === null || _this$mrzInformation === void 0 ? void 0 : _this$mrzInformation.map
    };
  }

}

exports.IdBackPhotoDetails = IdBackPhotoDetails;
//# sourceMappingURL=id_back_photo_details.js.map