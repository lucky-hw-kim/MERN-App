import * as UploadApi from '../api/UploadRequests'

export const uploadImage = (data) => async(dispatch)=> {
  try {
    await UploadApi.uploadImage(data)
  } catch (error) {
    console.log(error);
  }
}