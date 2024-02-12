function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { NativeModules } from 'react-native';
const {
  RNKYCLibrary
} = NativeModules;
import { IdFrontPhotoDetails } from '../models/IdFrontPhotoDetails';
import { IdBackPhotoDetails } from '../models/id_back_photo_details';
import { SelfiePhotoDetails } from '../models/selfie_photo_details';
import { NfcDetails } from '../models/nfc_details';
import { HeadPoseDetails } from '../models/head_pose_details';

class KycSdkPlugin {
  static async idFrontPhoto() {
    if (this._isIdFrontPhotoWaiting || this._isIdBackPhotoWaiting || this._isSelfiePhotoWaiting || this._isHeadPoseWaiting || this._isNfcWaiting) {
      return null;
    }

    this._isIdFrontPhotoWaiting = true;

    try {
      // Yerel modül üzerinden idFrontPhoto fonksiyonunu çağır.
      const scanResult = await RNKYCLibrary.startIDCardFrontActivity();
      this._isIdFrontPhotoWaiting = false;

      if (scanResult) {
        // scanResult'ı IdFrontPhotoDetails nesnesine dönüştür
        return new IdFrontPhotoDetails(scanResult);
      }
    } catch (error) {
      console.error('Error fetching ID front photo:', error);
      this._isIdFrontPhotoWaiting = false;
    }

    return null;
  }

  static async idBackPhoto() {
    if (this._isIdFrontPhotoWaiting || this._isIdBackPhotoWaiting || this._isSelfiePhotoWaiting || this._isHeadPoseWaiting || this._isNfcWaiting) {
      return null;
    }

    this._isIdBackPhotoWaiting = true;

    try {
      // Yerel modül üzerinden idFrontPhoto fonksiyonunu çağır.
      const scanResult = await RNKYCLibrary.showKycSdkIdBackPhotoActivity();
      this._isIdBackPhotoWaiting = false;

      if (scanResult) {
        // scanResult'ı IdFrontPhotoDetails nesnesine dönüştür
        return new IdBackPhotoDetails(scanResult);
      }
    } catch (error) {
      console.error('Error fetching ID back photo:', error);
      this._isIdFrontPhotoWaiting = false;
    }

    return null;
  }

  static async selfiePhoto() {
    if (this._isIdFrontPhotoWaiting || this._isIdBackPhotoWaiting || this._isSelfiePhotoWaiting || this._isHeadPoseWaiting || this._isNfcWaiting) {
      return null;
    }

    this._isSelfiePhotoWaiting = true;

    try {
      const scanResult = await RNKYCLibrary.showKycSdkSelfiePhotoActivity();
      this._isSelfiePhotoWaiting = false;

      if (scanResult) {
        return new SelfiePhotoDetails(scanResult);
      }
    } catch (error) {
      console.error('Error fetching Selfie:', error);
      this._isIdFrontPhotoWaiting = false;
    }

    return null;
  }

  static async nfcRead(nfcOptions) {
    if (this._isIdFrontPhotoWaiting || this._isIdBackPhotoWaiting || this._isSelfiePhotoWaiting || this._isHeadPoseWaiting || this._isNfcWaiting) {
      return null;
    }

    this._isNfcWaiting = true;

    try {
      const scanResult = await RNKYCLibrary.showKycSdkNfcActivity(nfcOptions);
      this._isNfcWaiting = false;

      if (scanResult) {
        return new NfcDetails(scanResult);
      }
    } catch (error) {
      console.error('Error fetching NFC Read  :', error);
      this._isIdFrontPhotoWaiting = false;
    }

    return null;
  }

  static async headPose(headPoseOptions) {
    if (this._isIdFrontPhotoWaiting || this._isIdBackPhotoWaiting || this._isSelfiePhotoWaiting || this._isHeadPoseWaiting || this._isNfcWaiting) {
      return null;
    }

    this._isNfcWaiting = true;

    try {
      const headPoseOptions = {
        direction: "left"
      };
      const scanResult = await RNKYCLibrary.showKycSdkHeadPoseActivity(headPoseOptions);
      this._isHeadPoseWaiting = false;

      if (scanResult) {
        return new HeadPoseDetails(scanResult);
      }
    } catch (error) {
      console.error('Error fetching HeadPose  :', error);
      this._isHeadPoseWaiting = false;
    }

    return null;
  }

}

_defineProperty(KycSdkPlugin, "_idFrontPhoto", 'id_front_photo');

_defineProperty(KycSdkPlugin, "_idBackPhoto", 'id_back_photo');

_defineProperty(KycSdkPlugin, "_selfiePhoto", 'selfie_photo');

_defineProperty(KycSdkPlugin, "_headPose", 'head_pose');

_defineProperty(KycSdkPlugin, "_nfc", 'nfc');

_defineProperty(KycSdkPlugin, "_isIdFrontPhotoWaiting", false);

_defineProperty(KycSdkPlugin, "_isHeadPoseWaiting", false);

_defineProperty(KycSdkPlugin, "_isIdBackPhotoWaiting", false);

_defineProperty(KycSdkPlugin, "_isSelfiePhotoWaiting", false);

_defineProperty(KycSdkPlugin, "_isNfcWaiting", false);

export default KycSdkPlugin;
//# sourceMappingURL=KycSdkPlugin.js.map