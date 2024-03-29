import { IdFrontPhotoDetails } from './models/IdFrontPhotoDetails';
import { IdBackPhotoDetails } from './models/id_back_photo_details';
import { SelfiePhotoDetails } from './models/selfie_photo_details';
import { NfcDetails } from './models/nfc_details';
import { NfcOptions } from './models/nfc_options';
import { HeadPoseDetails } from './models/head_pose_details';
import { HeadPoseOptions } from './models/head_pose_options';
import { KycSdkModule } from './internal/privateTypes';
export declare function showFrontId(): Promise<IdFrontPhotoDetails | null>;
export declare function showBackId(): Promise<IdBackPhotoDetails | null>;
export declare function showSelfie(): Promise<SelfiePhotoDetails | null>;
export declare function showNfc(nfcOptions: NfcOptions): Promise<NfcDetails | null>;
export declare function showHeadPose(headPoseOptions: HeadPoseOptions): Promise<HeadPoseDetails | null>;
export type { HeadPoseDetails, HeadPoseOptions, IdBackPhotoDetails, IdFrontPhotoDetails, SelfiePhotoDetails, NfcDetails, NfcOptions };
declare const KycSdk: KycSdkModule;
export default KycSdk;
