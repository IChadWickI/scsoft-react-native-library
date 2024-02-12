"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.showBackId = showBackId;
exports.showFrontId = showFrontId;
exports.showHeadPose = showHeadPose;
exports.showNfc = showNfc;
exports.showSelfie = showSelfie;

var _KycSdkPlugin = _interopRequireDefault(require("./internal/KycSdkPlugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function showFrontId() {
  try {
    const result = await _KycSdkPlugin.default.idFrontPhoto();
    return result;
  } catch (error) {
    console.error('Error in showFrontId:', error);
    return null;
  }
}

async function showBackId() {
  try {
    const result = await _KycSdkPlugin.default.idBackPhoto();
    return result;
  } catch (error) {
    console.error('Error in showBackId:', error);
    return null;
  }
}

async function showSelfie() {
  try {
    const result = await _KycSdkPlugin.default.selfiePhoto();
    return result;
  } catch (error) {
    console.error('Error in showSelfie:', error);
    return null;
  }
}

async function showNfc(nfcOptions) {
  try {
    const result = await _KycSdkPlugin.default.nfcRead(nfcOptions);
    return result;
  } catch (error) {
    console.error('Error in showSelfie:', error);
    return null;
  }
}

async function showHeadPose(headPoseOptions) {
  try {
    const result = await _KycSdkPlugin.default.headPose(headPoseOptions);
    return result;
  } catch (error) {
    console.error('Error in showSelfie:', error);
    return null;
  }
}

const KYCLibrary = {
  showFrontId,
  showBackId,
  showSelfie,
  showNfc,
  showHeadPose
};
var _default = KYCLibrary;
exports.default = _default;
//# sourceMappingURL=index.js.map