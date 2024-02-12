function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// IdPhotoOptions için TypeScript interface tanımı
// IdPhotoOptions sınıfı tanımı
export class IdPhotoOptions {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "activeColorHex", "");

    _defineProperty(this, "passiveColorHex", "");

    _defineProperty(this, "infoIdInformationText", "");

    _defineProperty(this, "labelTextColorHex", "");

    _defineProperty(this, "labelTextSize", 18);

    _defineProperty(this, "cameraFlashState", false);

    _defineProperty(this, "buttonCameraActiveImageBase64", "");

    _defineProperty(this, "buttonCameraPassiveImageBase64", "");

    _defineProperty(this, "buttonFlashImageBase64", "");

    _defineProperty(this, "buttonCloseImageBase64", "");

    _defineProperty(this, "hiddenIdPhotoText", false);

    _defineProperty(this, "hiddenIdPhotoCameraButton", false);

    _defineProperty(this, "hiddenIdPhotoFlashButton", false);

    _defineProperty(this, "hiddenCloseButton", false);

    Object.assign(this, options);
  } // Sınıfın özelliklerini bir obje olarak dışarı aktaran bir metot


  get map() {
    return {
      activeColorHex: this.activeColorHex,
      passiveColorHex: this.passiveColorHex,
      infoIdInformationText: this.infoIdInformationText,
      labelTextColorHex: this.labelTextColorHex,
      labelTextSize: this.labelTextSize.toString(),
      cameraFlashState: this.cameraFlashState.toString(),
      buttonCameraActiveImageBase64: this.buttonCameraActiveImageBase64,
      buttonCameraPassiveImageBase64: this.buttonCameraPassiveImageBase64,
      buttonFlashImageBase64: this.buttonFlashImageBase64,
      buttonCloseImageBase64: this.buttonCloseImageBase64,
      hiddenIdPhotoText: this.hiddenIdPhotoText.toString(),
      hiddenIdPhotoCameraButton: this.hiddenIdPhotoCameraButton.toString(),
      hiddenIdPhotoFlashButton: this.hiddenIdPhotoFlashButton.toString(),
      hiddenCloseButton: this.hiddenCloseButton.toString()
    };
  }

}
//# sourceMappingURL=id_photo_options.js.map