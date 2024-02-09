import { Platform } from 'react-native';
import {IdFrontPhotoDetails} from '../models/IdFrontPhotoDetails';
import {IdBackPhotoDetails} from '../models/id_back_photo_details';
import {SelfiePhotoDetails} from '../models/selfie_photo_details';
import {NfcDetails} from '../models/nfc_details';
import {HeadPoseDetails} from '../models/head_pose_details';
import {NfcOptions} from '../models/nfc_options';

export interface DeviceInfoModule {
  showFrontId: () => Promise<IdFrontPhotoDetails | null>
  showBackId: () => Promise<IdBackPhotoDetails | null>
  showSelfie: () => Promise<SelfiePhotoDetails | null>
  showNfc: (nfcOptions: NfcOptions) => Promise<NfcDetails | null>
  showHeadPose: () => Promise<HeadPoseDetails | null>
}

export type Getter<T> = () => T;
export type PlatformArray = typeof Platform.OS[];

export interface GetSupportedPlatformInfoSyncParams<T> {
  getter: Getter<T>;
  supportedPlatforms: PlatformArray;
  defaultValue: T;
  memoKey?: string;
}

export interface GetSupportedPlatformInfoAsyncParams<T>
  extends Omit<GetSupportedPlatformInfoSyncParams<T>, 'getter'> {
  getter: Getter<Promise<T>>;
}

export interface GetFilterPlatformFunctionsParams<T>
  extends GetSupportedPlatformInfoAsyncParams<T> {
  syncGetter: Getter<T>;
}

export interface GetSupportedPlatformInfoFunctionsParams<T>
  extends GetSupportedPlatformInfoAsyncParams<T> {
  syncGetter: Getter<T>;
}
