import KycSdkPlugin from './internal/KycSdkPlugin';
import {IdFrontPhotoDetails} from './models/IdFrontPhotoDetails';
import {IdBackPhotoDetails} from './models/id_back_photo_details';
import {SelfiePhotoDetails} from './models/selfie_photo_details';
import {NfcDetails} from './models/nfc_details';
import {HeadPoseDetails} from './models/head_pose_details';
import {NfcOptions} from './models/nfc_options';
import { DeviceInfoModule } from './internal/privateTypes';



export async function showFrontId(): Promise<IdFrontPhotoDetails | null> {
  try {
    const result = await KycSdkPlugin.idFrontPhoto();
    return result;
  } catch (error) {
    console.error('Error in showFrontId:', error);
    return null;
  }
}

export async function showBackId(): Promise<IdBackPhotoDetails | null> {
  try {
    const result = await KycSdkPlugin.idBackPhoto();
    return result;
  } catch (error) {
    console.error('Error in showBackId:', error);
    return null;
  }
}

export async function showSelfie(): Promise<SelfiePhotoDetails | null> {
  try {
    const result = await KycSdkPlugin.selfiePhoto();
    return result;
  } catch (error) {
    console.error('Error in showSelfie:', error);
    return null;
  }
}

export async function showNfc(nfcOptions : NfcOptions): Promise<NfcDetails | null> {
  try {
    const result = await KycSdkPlugin.nfcRead(nfcOptions);
    return result;
  } catch (error) {
    console.error('Error in showSelfie:', error);
    return null;
  }
}

export async function showHeadPose(): Promise<HeadPoseDetails | null> {
  try {
    const result = await KycSdkPlugin.headPose();
    return result;
  } catch (error) {
    console.error('Error in showSelfie:', error);
    return null;
  }
}



export type { HeadPoseDetails,IdBackPhotoDetails,IdFrontPhotoDetails,SelfiePhotoDetails,NfcDetails,NfcOptions};

const DeviceInfo: DeviceInfoModule = {
  showFrontId,
  showBackId,
  showSelfie,
  showNfc,
  showHeadPose
};

export default DeviceInfo;