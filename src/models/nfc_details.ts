import { PassportModel,PassportModelMap } from './passport_model';

export interface NfcDetailsMap {
  hasNfc?: boolean;
  passportModel?: PassportModelMap;
}

// NfcDetails sınıfı tanımı
export class NfcDetails {
  hasNfc: boolean = false;
  passportModel?: PassportModel;

  constructor(map: NfcDetailsMap = {}) {
    this.hasNfc = map.hasNfc ?? false;
    if (map.passportModel) {
      this.passportModel = PassportModel.fromMap(map.passportModel);
    }
  }

  get map(): NfcDetailsMap {
    return {
      hasNfc: this.hasNfc,
      passportModel: this.passportModel?.map,
    };
  }
}
