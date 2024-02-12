function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// HeadPoseDetails için TypeScript interface tanımı
// HeadPoseDetails sınıfı tanımı
export class HeadPoseDetails {
  constructor() {
    var _map$base64_image, _map$direction;

    let map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "base64_image", void 0);

    _defineProperty(this, "direction", void 0);

    this.base64_image = (_map$base64_image = map.base64_image) !== null && _map$base64_image !== void 0 ? _map$base64_image : '';
    this.direction = (_map$direction = map.direction) !== null && _map$direction !== void 0 ? _map$direction : '';
  } // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot


  get map() {
    return {
      base64_image: this.base64_image,
      direction: this.direction
    };
  }

}
//# sourceMappingURL=head_pose_details.js.map