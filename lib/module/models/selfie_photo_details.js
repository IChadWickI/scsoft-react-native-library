function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// SelfiePhotoDetails için TypeScript interface tanımı
// SelfiePhotoDetails sınıfı tanımı
export class SelfiePhotoDetails {
  constructor() {
    var _map$base64_selfieIma, _map$base64_autoCropp;

    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "base64_selfieImage", "");

    _defineProperty(this, "base64_autoCropped_selfieImage", "");

    this.base64_selfieImage = (_map$base64_selfieIma = map.base64_selfieImage) !== null && _map$base64_selfieIma !== void 0 ? _map$base64_selfieIma : '';
    this.base64_autoCropped_selfieImage = (_map$base64_autoCropp = map.base64_autoCropped_selfieImage) !== null && _map$base64_autoCropp !== void 0 ? _map$base64_autoCropp : '';
  } // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot


  get map() {
    return {
      base64_selfieImage: this.base64_selfieImage,
      base64_autoCropped_selfieImage: this.base64_autoCropped_selfieImage
    };
  }

}
//# sourceMappingURL=selfie_photo_details.js.map