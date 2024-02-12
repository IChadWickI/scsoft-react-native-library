function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class IdFrontPhotoDetails {
  constructor(map) {
    var _map$base64_idFrontIm, _map$base64_autoCropp, _map$base64_idFrontFa;

    _defineProperty(this, "base64_idFrontImage", void 0);

    _defineProperty(this, "base64_autoCropped_idFrontImage", void 0);

    _defineProperty(this, "base64_idFrontFaceImage", void 0);

    this.base64_idFrontImage = (_map$base64_idFrontIm = map.base64_idFrontImage) !== null && _map$base64_idFrontIm !== void 0 ? _map$base64_idFrontIm : '';
    this.base64_autoCropped_idFrontImage = (_map$base64_autoCropp = map.base64_autoCropped_idFrontImage) !== null && _map$base64_autoCropp !== void 0 ? _map$base64_autoCropp : '';
    this.base64_idFrontFaceImage = (_map$base64_idFrontFa = map.base64_idFrontFaceImage) !== null && _map$base64_idFrontFa !== void 0 ? _map$base64_idFrontFa : '';
  }

}
//# sourceMappingURL=IdFrontPhotoDetails.js.map