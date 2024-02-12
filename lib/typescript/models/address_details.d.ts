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
export declare class AddressDetails {
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
    constructor(map?: AddressDetailsMap);
}
