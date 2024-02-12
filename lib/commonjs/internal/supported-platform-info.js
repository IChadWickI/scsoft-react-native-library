"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearMemo = clearMemo;
exports.getSupportedPlatformInfoAsync = getSupportedPlatformInfoAsync;
exports.getSupportedPlatformInfoFunctions = getSupportedPlatformInfoFunctions;
exports.getSupportedPlatformInfoSync = getSupportedPlatformInfoSync;

var _reactNative = require("react-native");

// centralized memo object
let memo = {};

function clearMemo() {
  memo = {};
}
/**
 * function returns the proper getter based current platform X supported platforms
 * @param supportedPlatforms array of supported platforms (OS)
 * @param getter desired function used to get info
 * @param defaultGetter getter that returns a default value if desired getter is not supported by current platform
 */


function getSupportedFunction(supportedPlatforms, getter, defaultGetter) {
  let supportedMap = {};
  supportedPlatforms.filter(key => _reactNative.Platform.OS == key).forEach(key => supportedMap[key] = getter);
  return _reactNative.Platform.select({ ...supportedMap,
    default: defaultGetter
  });
}
/**
 * function used to get desired info synchronously — with optional memoization
 * @param param0
 */


function getSupportedPlatformInfoSync(_ref) {
  let {
    getter,
    supportedPlatforms,
    defaultValue,
    memoKey
  } = _ref;

  if (memoKey && memo[memoKey] != undefined) {
    return memo[memoKey];
  } else {
    const output = getSupportedFunction(supportedPlatforms, getter, () => defaultValue)();

    if (memoKey) {
      memo[memoKey] = output;
    }

    return output;
  }
}
/**
 * function used to get desired info asynchronously — with optional memoization
 * @param param0
 */


async function getSupportedPlatformInfoAsync(_ref2) {
  let {
    getter,
    supportedPlatforms,
    defaultValue,
    memoKey
  } = _ref2;

  if (memoKey && memo[memoKey] != undefined) {
    return memo[memoKey];
  } else {
    const output = await getSupportedFunction(supportedPlatforms, getter, () => Promise.resolve(defaultValue))();

    if (memoKey) {
      memo[memoKey] = output;
    }

    return output;
  }
}
/**
 * function that returns array of getter functions [async, sync]
 * @param param0
 */


function getSupportedPlatformInfoFunctions(_ref3) {
  let {
    syncGetter,
    ...asyncParams
  } = _ref3;
  return [() => getSupportedPlatformInfoAsync(asyncParams), () => getSupportedPlatformInfoSync({ ...asyncParams,
    getter: syncGetter
  })];
}
//# sourceMappingURL=supported-platform-info.js.map