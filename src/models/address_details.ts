export interface AddressDetailsMap {
    countryCode?: number;
    countryName?: string;
    cityCode?: number;
    cityName?: string;
    districtCode?: number;
    districtName?: string;
    streetCode?: number;
    streetName?: string;
    townCode?: number;
    townName?: string;
    postalCode?: string;
    addressDetail?: string;
  }
  
  // Adres detayları için sınıf tanımı
  export class AddressDetails {     
    countryCode: number;
    countryName: string;
    cityCode: number;
    cityName: string;
    districtCode: number;
    districtName: string;
    streetCode: number;
    streetName: string;
    townCode: number;
    townName: string;
    postalCode: string;
    addressDetail: string;
  
    constructor(map: AddressDetailsMap = {}) {
      this.countryCode = map.countryCode ?? 0;
      this.countryName = map.countryName ?? '';
      this.cityCode = map.cityCode ?? 0;
      this.cityName = map.cityName ?? '';
      this.districtCode = map.districtCode ?? 0;
      this.districtName = map.districtName ?? '';
      this.streetCode = map.streetCode ?? 0;
      this.streetName = map.streetName ?? '';
      this.townCode = map.townCode ?? 0;
      this.townName = map.townName ?? '';
      this.postalCode = map.postalCode ?? '';
      this.addressDetail = map.addressDetail ?? '';
    }
  }
  