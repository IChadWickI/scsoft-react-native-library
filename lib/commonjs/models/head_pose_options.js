"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadPoseOptions = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// HeadPoseOptions için TypeScript interface tanımı
// HeadPoseOptions sınıfı tanımı
class HeadPoseOptions {
  constructor() {
    var _options$direction;

    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      direction: 'left'
    };

    _defineProperty(this, "direction", void 0);

    this.direction = (_options$direction = options.direction) !== null && _options$direction !== void 0 ? _options$direction : 'left';
  } // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot


  get map() {
    return {
      direction: this.direction
    };
  }

}

exports.HeadPoseOptions = HeadPoseOptions;
//# sourceMappingURL=head_pose_options.js.map