export interface IdFrontPhotoDetailsMap {
    base64_idFrontImage?: string;
    base64_autoCropped_idFrontImage?: string;
    base64_idFrontFaceImage?: string;
  }
  
  export class IdFrontPhotoDetails {
    base64_idFrontImage: string;
    base64_autoCropped_idFrontImage: string;
    base64_idFrontFaceImage: string;
  
    constructor(map: IdFrontPhotoDetailsMap) {
      this.base64_idFrontImage = map.base64_idFrontImage ?? '';
      this.base64_autoCropped_idFrontImage = map.base64_autoCropped_idFrontImage ?? '';
      this.base64_idFrontFaceImage = map.base64_idFrontFaceImage ?? '';
    }
  }