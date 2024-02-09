// IdBackPhotoDetails için TypeScript interface tanımı
import { MrzDetails,MrzDetailsMap } from './mrz_details';

export interface IdBackPhotoDetailsMap {
    base64_idBackImage?: string;
    base64_autoCropped_idBackImage?: string;
    idCardAgeOver18?: boolean;
    didAfterMrzCheck?: boolean;
    mrzInformation?: MrzDetailsMap;
  }
  
  // IdBackPhotoDetails sınıfı tanımı
  export class IdBackPhotoDetails {
    base64_idBackImage: string = "";
    base64_autoCropped_idBackImage: string = "";
    idCardAgeOver18: boolean = true;
    didAfterMrzCheck: boolean = false;
    mrzInformation?: MrzDetails;
  
    constructor(map: IdBackPhotoDetailsMap = {}) {
      this.base64_idBackImage = map.base64_idBackImage ?? '';
      this.base64_autoCropped_idBackImage = map.base64_autoCropped_idBackImage ?? '';
      this.idCardAgeOver18 = map.idCardAgeOver18 ?? true;
      this.didAfterMrzCheck = map.didAfterMrzCheck ?? false;
      if (map.mrzInformation) {
        this.mrzInformation = new MrzDetails(map.mrzInformation);
      }
    }
  
    get map(): IdBackPhotoDetailsMap {
      return {
        base64_idBackImage: this.base64_idBackImage,
        base64_autoCropped_idBackImage: this.base64_autoCropped_idBackImage,
        idCardAgeOver18: this.idCardAgeOver18,
        didAfterMrzCheck: this.didAfterMrzCheck,
        mrzInformation: this.mrzInformation?.map,
      };
    }
  }
  