import { MrzDetails, MrzDetailsMap } from './mrz_details';
export interface IdBackPhotoDetailsMap {
    base64_idBackImage?: string;
    base64_autoCropped_idBackImage?: string;
    idCardAgeOver18?: boolean;
    didAfterMrzCheck?: boolean;
    mrzInformation?: MrzDetailsMap;
}
export declare class IdBackPhotoDetails {
    base64_idBackImage: string;
    base64_autoCropped_idBackImage: string;
    idCardAgeOver18: boolean;
    didAfterMrzCheck: boolean;
    mrzInformation?: MrzDetails;
    constructor(map?: IdBackPhotoDetailsMap);
    get map(): IdBackPhotoDetailsMap;
}
