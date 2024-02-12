package com.learnium.RNDeviceInfo;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.KeyguardManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.FeatureInfo;
import android.location.LocationManager;
import android.media.AudioManager;
import android.media.MediaCodecInfo;
import android.media.MediaCodecList;
import android.net.wifi.WifiManager;
import android.net.wifi.WifiInfo;
import android.os.Build;
import android.os.Environment;
import android.os.PowerManager;
import android.os.StatFs;
import android.os.BatteryManager;
import android.os.Debug;
import android.os.Process;
import android.provider.Settings;
import android.webkit.WebSettings;
import android.telephony.TelephonyManager;
import android.text.TextUtils;
import android.app.ActivityManager;
import android.hardware.Camera;
import android.hardware.camera2.CameraManager;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.learnium.RNDeviceInfo.resolver.DeviceIdResolver;
import com.learnium.RNDeviceInfo.resolver.DeviceTypeResolver;

import com.scsoft.kycsdklibrary.model.KycSdkHeadPoseModel;
import com.scsoft.kycsdklibrary.model.KycSdkHeadPoseOptions;
import com.scsoft.kycsdklibrary.model.KycSdkIDCardBackModel;
import com.scsoft.kycsdklibrary.model.KycSdkIDCardFrontModel;
import com.scsoft.kycsdklibrary.model.KycSdkNfcModel;
import com.scsoft.kycsdklibrary.model.KycSdkNfcOptions;
import com.scsoft.kycsdklibrary.model.KycSdkSelfieModel;
import com.scsoft.kycsdklibrary.sdkActivity.KycSdkHeadPoseActivity;
import com.scsoft.kycsdklibrary.sdkActivity.KycSdkIDCardBackActivity;
import com.scsoft.kycsdklibrary.sdkActivity.KycSdkIDCardFrontActivity;
import com.scsoft.kycsdklibrary.sdkActivity.KycSdkNfcActivity;
import com.scsoft.kycsdklibrary.sdkActivity.KycSdkSelfieActivity;


import java.lang.reflect.Method;
import java.net.InetAddress;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.lang.Runtime;
import java.net.NetworkInterface;
import java.math.BigInteger;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Nonnull;

import static android.content.Context.ACTIVITY_SERVICE;
import static android.os.BatteryManager.BATTERY_STATUS_CHARGING;
import static android.os.BatteryManager.BATTERY_STATUS_FULL;
import static android.provider.Settings.Secure.getString;

@ReactModule(name = RNDeviceModule.NAME)
public class RNDeviceModule extends ReactContextBaseJavaModule implements ActivityEventListener {
    public static final String NAME = "RNKYCLibrary";

    public static final int ID_CARD_FRONT_REQUEST_CODE = 13415;
    public static final int ID_CARD_BACK_REQUEST_CODE = 13416;
    public static final int SELFIE_REQUEST_CODE = 13417;
    public static final int NFC_REQUEST_CODE = 13418;
    public static final int JISTI_REQUEST_CODE = 13419;
    public static final int HEAD_POSE_REQUEST_CODE = 13420;

    private Activity activity;

    final String _idFrontPhoto = "id_front_photo";
    final String _idBackPhoto = "id_back_photo";
    final String _selfiePhoto = "selfie_photo";
    final String _nfc = "nfc";
    final String _headPose = "head_pose";
    private Context context;
    private final ReactApplicationContext reactContext;
    private Promise promise;

    public RNDeviceModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        reactContext.addActivityEventListener(this);
    }

    @Override
    public void initialize() {
        IntentFilter filter = new IntentFilter();
        filter.addAction(Intent.ACTION_BATTERY_CHANGED);
        filter.addAction(Intent.ACTION_POWER_CONNECTED);
        filter.addAction(Intent.ACTION_POWER_DISCONNECTED);
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
            filter.addAction(PowerManager.ACTION_POWER_SAVE_MODE_CHANGED);
        }
    }

    @Override
    @Nonnull
    public String getName() {
        return NAME;
    }

    public static SharedPreferences getRNDISharedPreferences(Context context) {
        return context.getSharedPreferences("react-native-scsoft-kyclibrary", Context.MODE_PRIVATE);
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (requestCode == ID_CARD_FRONT_REQUEST_CODE) {
            handleFrontCardResult(resultCode, data);
        } else if (requestCode == ID_CARD_BACK_REQUEST_CODE) {
            handleBackCardResult(resultCode, data);
        } else if (requestCode == SELFIE_REQUEST_CODE) {
            handleSelfieResult(resultCode, data);
        } else if (requestCode == NFC_REQUEST_CODE) {
            handleNFCResult(resultCode, data);
        } else if (requestCode == HEAD_POSE_REQUEST_CODE) {
            handleHeadPoseResult(resultCode, data);
        } else if (requestCode == JISTI_REQUEST_CODE) {
            handleJitsiResult(resultCode, data);
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String denemeFuncSync() {
        String aaa = " Başarılı";
        Intent intent = new Intent(reactContext, KycSdkIDCardFrontActivity.class);
        getCurrentActivity().startActivityForResult(intent, ID_CARD_FRONT_REQUEST_CODE);
        return aaa;
    }

    @ReactMethod
    public void denemeFunc(Promise p) {
        p.resolve(denemeFuncSync());
    }


    @ReactMethod
    public void startIDCardFrontActivity(Promise p) {
        this.promise = p;
        Intent intent = new Intent(reactContext, KycSdkIDCardFrontActivity.class);
        getCurrentActivity().startActivityForResult(intent, ID_CARD_FRONT_REQUEST_CODE);
    }

    @ReactMethod
    void showKycSdkIdBackPhotoActivity(Promise p) {
        this.promise = p;
        Intent intent = new Intent(reactContext, KycSdkIDCardBackActivity.class);
        getCurrentActivity().startActivityForResult(intent, ID_CARD_BACK_REQUEST_CODE);
    }

    @ReactMethod
    void showKycSdkSelfiePhotoActivity(Promise p) {
        this.promise = p;
        Intent intent = new Intent(reactContext, KycSdkSelfieActivity.class);
        getCurrentActivity().startActivityForResult(intent, SELFIE_REQUEST_CODE);
    }

    @ReactMethod
    public void showKycSdkNfcActivity(ReadableMap readableMap, Promise p) {
        this.promise = p;
        Intent intent = new Intent(reactContext, KycSdkNfcActivity.class);

        // ReadableMap'ten Java Map'ine dönüştürme
        Map<String, String> map = new HashMap<>();
        ReadableMapKeySetIterator iterator = readableMap.keySetIterator();
        while (iterator.hasNextKey()) {
            String key = iterator.nextKey();
            String value = readableMap.getString(key);
            map.put(key, value);
        }

        KycSdkNfcOptions options = new KycSdkNfcOptions(map);
        intent.putExtra(KycSdkNfcActivity.OPTIONS, options);
        getCurrentActivity().startActivityForResult(intent, NFC_REQUEST_CODE);
    }

    @ReactMethod
    public void showKycSdkHeadPoseActivity(ReadableMap readableMap, Promise p) {
        this.promise = p;
        Intent intent = new Intent(reactContext, KycSdkHeadPoseActivity.class);

        // ReadableMap'ten Java Map'ine dönüştürme
        Map<String, String> map = new HashMap<>();
        ReadableMapKeySetIterator iterator = readableMap.keySetIterator();
        while (iterator.hasNextKey()) {
            String key = iterator.nextKey();
            String value = readableMap.getString(key);
            map.put(key, value);
        }

        KycSdkHeadPoseOptions options = new KycSdkHeadPoseOptions(map);
        intent.putExtra(KycSdkHeadPoseActivity.OPTIONS, options);
        getCurrentActivity().startActivityForResult(intent, HEAD_POSE_REQUEST_CODE);
    }



    private void handleJitsiResult(int resultCode, Intent data) {

    }

    private void handleHeadPoseResult(int resultCode, Intent data) {
        try {
            if (resultCode == Activity.RESULT_OK) {
                KycSdkHeadPoseModel model = KycSdkHeadPoseActivity.getKycSdkHeadPoseModel();
                if (model != null) {
                    WritableMap map = Arguments.createMap();
                    map.putString("base64_image", model.getBase64_image());
                    map.putString("direction", model.getDirection());

                    promise.resolve(map);
                    KycSdkHeadPoseActivity.setKycSdkHeadPoseModel(null);

                } else {
                    promise.resolve(null);
                }
            } else if (resultCode == Activity.RESULT_CANCELED) {
                promise.reject("Activity Canceled", "The activity was canceled.");
            }
        } catch (Exception e) {
            promise.reject("Error", "An error occurred: " + e.getMessage());
        } finally {
            promise = null;
        }
    }

    private void handleNFCResult(int resultCode, Intent data) {
        try {
            if (resultCode == Activity.RESULT_OK) {
                KycSdkNfcModel model = KycSdkNfcActivity.getKycSdkNfcModel();
                if (model != null) {

                    WritableMap map = Arguments.createMap();
                    map.putBoolean("hasNfc", model.getHasNfc());

                    if (model.getPassportModel() != null) {

                        WritableMap passzMap = Arguments.createMap();
                        passzMap.putString("docType", model.getPassportModel().getDocType());
                        passzMap.putString("mrzText", model.getPassportModel().getMrzText());
                        passzMap.putString("fullName", model.getPassportModel().getFullName());
                        passzMap.putString("certificate", model.getPassportModel().getCertificate());
                        passzMap.putString("name", model.getPassportModel().getName());
                        passzMap.putString("surname", model.getPassportModel().getSurname());
                        passzMap.putString("personalNumber", model.getPassportModel().getPersonalNumber());
                        passzMap.putString("gender", model.getPassportModel().getGender());
                        passzMap.putString("birthDate", model.getPassportModel().getBirthDate());
                        passzMap.putString("expiryDate", model.getPassportModel().getExpiryDate());
                        passzMap.putString("serialNumber", model.getPassportModel().getSerialNumber());
                        passzMap.putString("nationality", model.getPassportModel().getNationality());
                        passzMap.putString("issuerAuthority", model.getPassportModel().getIssuerAuthority());
                        passzMap.putString("faceImageBase64", model.getPassportModel().getFaceImageBase64());
                        passzMap.putString("portraitImageBase64", model.getPassportModel().getPortraitImageBase64());
                        passzMap.putString("signatureBase64", model.getPassportModel().getSignatureBase64());
                        passzMap.putString("documentNumber", model.getPassportModel().getDocumentNumber());
                        passzMap.putString("custodyInformation", model.getPassportModel().getCustodyInformation());
                        passzMap.putString("fullDateOfBirth", model.getPassportModel().getFullDateOfBirth());
                        passzMap.putString("nameOfHolder", model.getPassportModel().getNameOfHolder());
                        passzMap.putString("personalNumber2", model.getPassportModel().getPersonalNumber());
                        passzMap.putString("personalSummary", model.getPassportModel().getPersonalSummary());
                        passzMap.putString("profession", model.getPassportModel().getProfession());
                        passzMap.putString("proofOfCitizenship", model.getPassportModel().getProofOfCitizenship());
                        passzMap.putString("telephone", model.getPassportModel().getTelephone());
                        passzMap.putString("title", model.getPassportModel().getTitle());
                        map.putMap("passportModel", passzMap);

                    }

                    promise.resolve(map);
                    KycSdkNfcActivity.setKycSdkNfcModel(null);

                } else {
                    promise.resolve(null);
                }
            } else if (resultCode == Activity.RESULT_CANCELED) {
                promise.reject("Activity Canceled", "The activity was canceled.");
            }
        } catch (Exception e) {
            promise.reject("Error", "An error occurred: " + e.getMessage());
        } finally {
            promise = null;
        }
    }

    private void handleSelfieResult(int resultCode, Intent data) {
        try {
            if (resultCode == Activity.RESULT_OK) {
                KycSdkSelfieModel model = KycSdkSelfieActivity.getKycSdkSelfieModel();
                if (model != null) {
                    WritableMap map = Arguments.createMap();
                    map.putString("base64_selfieImage", model.getBase64_selfieImage());
                    map.putString("base64_autoCropped_selfieImage", model.getBase64_selfieImage());

                    promise.resolve(map);
                    KycSdkSelfieActivity.setKycSdkSelfieModel(null);
                } else {
                    promise.resolve(null);
                }
            } else if (resultCode == Activity.RESULT_CANCELED) {
                promise.reject("Activity Canceled", "The activity was canceled.");
            }
        } catch (Exception e) {
            promise.reject("Error", "An error occurred: " + e.getMessage());
        } finally {
            promise = null;
        }
    }

    private void handleFrontCardResult(int resultCode, Intent data) {
        try {
            if (resultCode == Activity.RESULT_OK) {
                KycSdkIDCardFrontModel model = KycSdkIDCardFrontActivity.getKycSdkIDCardFrontModel();
                if (model != null) {
                    WritableMap map = Arguments.createMap();
                    map.putString("base64_idFrontImage", model.getBase64_idFrontImage());
                    map.putString("base64_autoCropped_idFrontImage", model.getBase64_autoCropped_idFrontImage());
                    map.putString("base64_idFrontFaceImage", model.getBase64_idFrontFaceImage());
                    promise.resolve(map);
                    KycSdkIDCardFrontActivity.setKycSdkIDCardFrontModel(null);
                } else {
                    promise.resolve(null);
                }
            } else if (resultCode == Activity.RESULT_CANCELED) {
                promise.reject("Activity Canceled", "The activity was canceled.");
            }
        } catch (Exception e) {
            promise.reject("Error", "An error occurred: " + e.getMessage());
        } finally {
            promise = null;
        }
    }

    private void handleBackCardResult(int resultCode, Intent data) {
        try {
            if (resultCode == Activity.RESULT_OK) {
                KycSdkIDCardBackModel model = KycSdkIDCardBackActivity.getKycSdkIDCardBackModel();

                if (model != null) {
                    WritableMap map = Arguments.createMap();
                    // Temel resim bilgileri
                    map.putString("base64_idBackImage", model.getBase64_idBackImage());
                    map.putString("base64_autoCropped_idBackImage", model.getBase64_autoCropped_idBackImage());
                    map.putBoolean("idCardAgeOver18", model.getIdCardAgeOver18());
                    map.putBoolean("didAfterMrzCheck", model.getDidAfterMrzCheck());

                    // MRZ bilgileri, eğer varsa
                    if (model.getMrzInformation() != null) {
                        WritableMap mrzMap = Arguments.createMap();
                        mrzMap.putString("documentNumber", model.getMrzInformation().getDocumentNumber());
                        mrzMap.putString("birthDate", model.getMrzInformation().getBirthDate());
                        mrzMap.putString("expiryDate", model.getMrzInformation().getExpiryDate());
                        mrzMap.putString("mrzCode", model.getMrzInformation().getMrzCode());
                        mrzMap.putString("personalNumber", model.getMrzInformation().getPersonalNumber());
                        mrzMap.putString("gender", model.getMrzInformation().getGender());
                        mrzMap.putString("nationality", model.getMrzInformation().getNationality());
                        mrzMap.putString("issuingState", model.getMrzInformation().getIssuingState());
                        mrzMap.putString("documentCode", model.getMrzInformation().getDocumentCode());
                        mrzMap.putString("optionalData1", model.getMrzInformation().getOptionalData1());
                        mrzMap.putString("optionalData2", model.getMrzInformation().getOptionalData2());
                        mrzMap.putString("primaryIdentifier", model.getMrzInformation().getPrimaryIdentifier());
                        mrzMap.putString("secondaryIdentifier", model.getMrzInformation().getSecondaryIdentifier());
                        mrzMap.putString("documentType", model.getMrzInformation().getDocumentType());
                        map.putMap("mrzInformation", mrzMap);
                    }
                    promise.resolve(map);
                    KycSdkIDCardBackActivity.setKycSdkIDCardBackModel(null);
                } else {
                    promise.resolve(null);
                }
            } else if (resultCode == Activity.RESULT_CANCELED) {
                promise.reject("Activity Canceled", "The activity was canceled.");
            }
        } catch (Exception e) {
            promise.reject("Error", "An error occurred: " + e.getMessage());
        } finally {
            promise = null;
        }
    }


    @Override
    public void onNewIntent(Intent intent) {

    }
}
