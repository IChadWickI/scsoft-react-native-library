import { IdFrontPhotoDetails } from '../models/IdFrontPhotoDetails';
import { IdBackPhotoDetails } from '../models/id_back_photo_details';
import { SelfiePhotoDetails } from '../models/selfie_photo_details';
import { NfcDetails } from '../models/nfc_details';
import { NfcOptions } from '../models/nfc_options';
import { HeadPoseDetails } from '../models/head_pose_details';
import { HeadPoseOptions } from '../models/head_pose_options';
declare class KycSdkPlugin {
    static _idFrontPhoto: string;
    static _idBackPhoto: string;
    static _selfiePhoto: string;
    static _headPose: string;
    static _nfc: string;
    static _isIdFrontPhotoWaiting: boolean;
    static _isHeadPoseWaiting: boolean;
    static _isIdBackPhotoWaiting: boolean;
    static _isSelfiePhotoWaiting: boolean;
    static _isNfcWaiting: boolean;
    static idFrontPhoto(): Promise<IdFrontPhotoDetails | null>;
    static idBackPhoto(): Promise<IdBackPhotoDetails | null>;
    static selfiePhoto(): Promise<SelfiePhotoDetails | null>;
    static nfcRead(nfcOptions: NfcOptions): Promise<NfcDetails | null>;
    static headPose(headPoseOptions: HeadPoseOptions): Promise<HeadPoseDetails | null>;
}
export default KycSdkPlugin;
