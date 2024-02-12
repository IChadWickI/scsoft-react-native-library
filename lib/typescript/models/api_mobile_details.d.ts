export interface ApiMobileDetailsMap {
    status?: boolean;
    success?: boolean;
    message?: string;
    statusCode?: number;
    resourceId?: string;
    returnCode?: string;
    returnDesc?: string;
}
export declare class ApiMobileDetails {
    status: boolean;
    success: boolean;
    message: string;
    statusCode: number;
    resourceId: string;
    returnCode: string;
    returnDesc: string;
    constructor(map?: ApiMobileDetailsMap);
    get map(): ApiMobileDetailsMap;
}
