export declare enum CardHolderNameScanPosition {
    aboveCardNumber = "aboveCardNumber",
    belowCardNumber = "belowCardNumber"
}
export declare type CardScanOptionsParams = {
    scanExpiryDate?: boolean;
    scanCardHolderName?: boolean;
    initialScansToDrop?: number;
    validCardsToScanBeforeFinishingScan?: number;
    cardHolderNameBlackListedWords?: string[];
    considerPastDatesInExpiryDateScan?: boolean;
    maxCardHolderNameLength?: number;
    enableLuhnCheck?: boolean;
    cardScannerTimeOut?: number;
    enableDebugLogs?: boolean;
    possibleCardHolderNamePositions?: CardHolderNameScanPosition[];
};
export declare class CardScanOptions {
    scanExpiryDate: boolean;
    scanCardHolderName: boolean;
    initialScansToDrop: number;
    validCardsToScanBeforeFinishingScan: number;
    cardHolderNameBlackListedWords: string[];
    considerPastDatesInExpiryDateScan: boolean;
    maxCardHolderNameLength: number;
    enableLuhnCheck: boolean;
    cardScannerTimeOut: number;
    enableDebugLogs: boolean;
    possibleCardHolderNamePositions: CardHolderNameScanPosition[];
    constructor({ scanExpiryDate, scanCardHolderName, initialScansToDrop, validCardsToScanBeforeFinishingScan, cardHolderNameBlackListedWords, considerPastDatesInExpiryDateScan, maxCardHolderNameLength, enableLuhnCheck, cardScannerTimeOut, enableDebugLogs, possibleCardHolderNamePositions, }?: CardScanOptionsParams);
    get map(): Record<string, any>;
}
