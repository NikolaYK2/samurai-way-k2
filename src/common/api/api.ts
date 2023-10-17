import axios from "axios";
import {ProfileUserType} from "features/redux/proFilePageReducer";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '0317dbf2-f26f-44a4-a811-d77a69628a1e'},
});

type DataAuthType = {
    id: number,
    email: string,
    login: string,
}

export type ResponsType<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
}

export type PhotosType = {
    small: string,
    large: string,
}

export type UsersType = {
    id: string,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean,
    // location: LocationType,
}

type GetUsersType = {
    items: UsersType[],
    totalCount: number,
    error: string,
}
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance./*axios.*/get<GetUsersType>(/*baseUrl + */`users?page=${currentPage}&count=${pageSize}`/*,{withCredentials:true,}*/).then(response => response.data);
    },
    deleteFollow(id: string) {
        return instance.delete<ResponsType<{}>>(`follow/${id}`).then(response => response.data);
    },
    postFollow(id: string) {
        return instance.post<ResponsType>(`follow/${id}`).then(response => response.data);
    },
}
//=================================================================================================

export type RegisterLoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: boolean,
}
export const authorizationAPI = {
    authorizeMe() {
        return instance.get<ResponsType<DataAuthType>>(`auth/me`).then(response => response.data);
    },
    authorizeLogin(data: RegisterLoginType) {
        return instance.post<ResponsType<RegisterLoginType>>('auth/login', data);
    },
    logout() {
        return instance.delete<ResponsType>('auth/login');
    }
}
//================================================================================


export const friendsAPI = {
    setUsersFriend() {
        return instance.get<GetUsersType>('users?friend=true').then(response => response.data.items)
    },
}

// export const getUsers =(currentPage = 1, pageSize = 10)=>{
//     return instance./*axios.*/get(/*baseUrl + */`3-users?page=${currentPage}&count=${pageSize}`/*,{withCredentials:true,}*/).then(response=>response.data);
// }


export const profileApi = {
    getUserProfile(userId: number) {
        return instance.get<ProfileUserType>(`profile/${userId}`).then(response => response.data);
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