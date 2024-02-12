export enum CardHolderNameScanPosition {
  aboveCardNumber = "aboveCardNumber",
  belowCardNumber = "belowCardNumber",
}

export type CardScanOptionsParams = {
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

export class CardScanOptions {
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

  constructor({
    scanExpiryDate = true,
    scanCardHolderName = false,
    initialScansToDrop = 1,
    validCardsToScanBeforeFinishingScan = 6,
    cardHolderNameBlackListedWords = [],
    considerPastDatesInExpiryDateScan = false,
    maxCardHolderNameLength = 26,
    enableLuhnCheck = true,
    cardScannerTimeOut = 0,
    enableDebugLogs = false,
    possibleCardHolderNamePositions = [CardHolderNameScanPosition.belowCardNumber],
  }: CardScanOptionsParams = {}) {
    this.scanExpiryDate = scanExpiryDate;
    this.scanCardHolderName = scanCardHolderName;
    this.initialScansToDrop = initialScansToDrop;
    this.validCardsToScanBeforeFinishingScan = validCardsToScanBeforeFinishingScan;
    this.cardHolderNameBlackListedWords = cardHolderNameBlackListedWords;
    this.considerPastDatesInExpiryDateScan = considerPastDatesInExpiryDateScan;
    this.maxCardHolderNameLength = maxCardHolderNameLength;
    this.enableLuhnCheck = enableLuhnCheck;
    this.cardScannerTimeOut = cardScannerTimeOut;
    this.enableDebugLogs = enableDebugLogs;
    this.possibleCardHolderNamePositions = possibleCardHolderNamePositions;
  }

  get map(): Record<string, any> {
    return {
      scanExpiryDate: this.scanExpiryDate,
      scanCardHolderName: this.scanCardHolderName,
      initialScansToDrop: this.initialScansToDrop,
      validCardsToScanBeforeFinishingScan: this.validCardsToScanBeforeFinishingScan,
      cardHolderNameBlackListedWords: this.cardHolderNameBlackListedWords.join(","),
      considerPastDatesInExpiryDateScan: this.considerPastDatesInExpiryDateScan,
      maxCardHolderNameLength: this.maxCardHolderNameLength,
      enableLuhnCheck: this.enableLuhnCheck,
      cardScannerTimeOut: this.cardScannerTimeOut,
      enableDebugLogs: this.enableDebugLogs,
      possibleCardHolderNamePositions: this.possibleCardHolderNamePositions.map(position => position),
    };
  }
}
