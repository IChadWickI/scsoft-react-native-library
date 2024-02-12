"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardScanOptions = exports.CardHolderNameScanPosition = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let CardHolderNameScanPosition;
exports.CardHolderNameScanPosition = CardHolderNameScanPosition;

(function (CardHolderNameScanPosition) {
  CardHolderNameScanPosition["aboveCardNumber"] = "aboveCardNumber";
  CardHolderNameScanPosition["belowCardNumber"] = "belowCardNumber";
})(CardHolderNameScanPosition || (exports.CardHolderNameScanPosition = CardHolderNameScanPosition = {}));

class CardScanOptions {
  constructor() {
    let {
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
      possibleCardHolderNamePositions = [CardHolderNameScanPosition.belowCardNumber]
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _defineProperty(this, "scanExpiryDate", void 0);

    _defineProperty(this, "scanCardHolderName", void 0);

    _defineProperty(this, "initialScansToDrop", void 0);

    _defineProperty(this, "validCardsToScanBeforeFinishingScan", void 0);

    _defineProperty(this, "cardHolderNameBlackListedWords", void 0);

    _defineProperty(this, "considerPastDatesInExpiryDateScan", void 0);

    _defineProperty(this, "maxCardHolderNameLength", void 0);

    _defineProperty(this, "enableLuhnCheck", void 0);

    _defineProperty(this, "cardScannerTimeOut", void 0);

    _defineProperty(this, "enableDebugLogs", void 0);

    _defineProperty(this, "possibleCardHolderNamePositions", void 0);

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

  get map() {
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
      possibleCardHolderNamePositions: this.possibleCardHolderNamePositions.map(position => position)
    };
  }

}

exports.CardScanOptions = CardScanOptions;
//# sourceMappingURL=card_scan_options.js.map