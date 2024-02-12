import KycSdkPlugin from './internal/KycSdkPlugin';
export async function showFrontId() {
  try {
    const result = await KycSdkPlugin.idFrontPhoto();
    return result;
  } catch (error) {
    console.error('Error in showFrontId:', error);
    return null;
  }
}
export async function showBackId() {
  try {
    const result = await KycSdkPlugin.idBackPhoto();
    return result;
  } catch (error) {
    console.error('Error in showBackId:', error);
    return null;
  }
}
export async function showSelfie() {
  try {
    const result = await KycSdkPlugin.selfiePhoto();
    return result;
  } catch (error) {
    console.error('Error in showSelfie:', error);
    return null;
  }
}
export async function showNfc(nfcOptions) {
  try {
    const result = await KycSdkPlugin.nfcRead(nfcOptions);
    return result;
  } catch (error) {
    console.error('Error in showSelfie:', error);
    return null;
  }
}
export async function showHeadPose(headPoseOptions) {
  try {
    const result = await KycSdkPlugin.headPose(headPoseOptions);
    return result;
  } catch (error) {
    console.error('Error in showSelfie:', error);
    return null;
  }
}
const KycSdk = {
  showFrontId,
  showBackId,
  showSelfie,
  showNfc,
  showHeadPose
};
export default KycSdk;
//# sourceMappingURL=index.js.map