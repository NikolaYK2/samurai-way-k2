import {ContactsType, ProfileUserType} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {instance, PhotosType, ResponsType} from "common/api/api";

export type UpdProfileType = Omit<ProfileUserType, 'photos'> & {
  contacts: ContactsType & { [key: string]: string };
}

export const profileApi = {
  async getUserProfile(userId: number) {
    let response = await instance.get<ProfileUserType>(`profile/${userId}`);
    return response.data;
  },
  updUserProfile(updProfile: UpdProfileType) {
    return instance.put<ResponsType<ProfileUserType>>(`profile`, updProfile);
  },
  getProfileStatusUser(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updProfileStatus(status: string) {
    return instance.put<ResponsType>('profile/status', {status: status});
  },
  changePhotoUser(file: FormData) {
    return instance.put<ResponsType<PhotosType>>('profile/photo', file);
  }
}