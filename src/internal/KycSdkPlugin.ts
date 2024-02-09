import { NativeModules } from 'react-native';

const { RNDeviceInfo } = NativeModules;
import {IdFrontPhotoDetails} from '../models/IdFrontPhotoDetails';
import {IdBackPhotoDetails} from '../models/id_back_photo_details';
import {SelfiePhotoDetails} from '../models/selfie_photo_details';
import {NfcDetails} from '../models/nfc_details';
import {HeadPoseDetails} from '../models/head_pose_details';
import {NfcOptions} from '../models/nfc_options';

class KycSdkPlugin {
    static _idFrontPhoto = 'id_front_photo';
    static _idBackPhoto = 'id_back_photo';
    static _selfiePhoto = 'selfie_photo';
    static _headPose = 'head_pose';
    static _nfc = 'nfc';
    static _isIdFrontPhotoWaiting = false;
    static _isHeadPoseWaiting = false;
    static _isIdBackPhotoWaiting = false;
    static _isSelfiePhotoWaiting = false;
    static _isNfcWaiting = false;
  
    static async idFrontPhoto(): Promise<IdFrontPhotoDetails | null> {
      if (this._isIdFrontPhotoWaiting ||
        this._isIdBackPhotoWaiting ||
        this._isSelfiePhotoWaiting ||
        this._isHeadPoseWaiting ||
        this._isNfcWaiting
      ) {
        return null;
      }
      this._isIdFrontPhotoWaiting = true;
  
      try {
        // Yerel modül üzerinden idFrontPhoto fonksiyonunu çağır.
        const scanResult = await RNDeviceInfo.startIDCardFrontActivity();
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

    static async idBackPhoto(): Promise<IdBackPhotoDetails | null> {
      if (this._isIdFrontPhotoWaiting ||
        this._isIdBackPhotoWaiting ||
        this._isSelfiePhotoWaiting ||
        this._isHeadPoseWaiting ||
        this._isNfcWaiting
      ) {
        return null;
      }
      this._isIdBackPhotoWaiting = true;
  
      try {
        // Yerel modül üzerinden idFrontPhoto fonksiyonunu çağır.
        const scanResult = await RNDeviceInfo.showKycSdkIdBackPhotoActivity();
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

    static async selfiePhoto(): Promise<SelfiePhotoDetails | null> {
      if (this._isIdFrontPhotoWaiting ||
        this._isIdBackPhotoWaiting ||
        this._isSelfiePhotoWaiting ||
        this._isHeadPoseWaiting ||
        this._isNfcWaiting
      ) {
        return null;
      }
      this._isSelfiePhotoWaiting = true;

      try {
        const scanResult = await RNDeviceInfo.showKycSdkSelfiePhotoActivity();
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

    static async nfcRead(nfcOptions :NfcOptions): Promise<NfcDetails | null> {
      if (this._isIdFrontPhotoWaiting ||
        this._isIdBackPhotoWaiting ||
        this._isSelfiePhotoWaiting ||
        this._isHeadPoseWaiting ||
        this._isNfcWaiting
      ) {
        return null;
      }
      this._isNfcWaiting = true;

      try {

        const scanResult = await RNDeviceInfo.showKycSdkNfcActivity(nfcOptions);
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

    static async headPose(): Promise<HeadPoseDetails | null> {
      if (this._isIdFrontPhotoWaiting ||
        this._isIdBackPhotoWaiting ||
        this._isSelfiePhotoWaiting ||
        this._isHeadPoseWaiting ||
        this._isNfcWaiting
      ) {
        return null;
      }
      this._isNfcWaiting = true;

      try {

        const headPoseOptions = {
          direction: "left"
        };
        
        const scanResult = await RNDeviceInfo.showKycSdkHeadPoseActivity(headPoseOptions);
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
  
  export default KycSdkPlugin;