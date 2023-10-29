import axios from "axios";
import {GetUsersType} from "features/2-main/content/4-users/api/usersApi";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {'API-KEY': '0317dbf2-f26f-44a4-a811-d77a69628a1e'},
});



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



export const friendsAPI = {
  setUsersFriend() {
    return instance.get<GetUsersType>('users?friend=true')
  },
}

// export const getUsers =(currentPage = 1, pageSize = 10)=>{
//     return instance./*axios.*/get(/*baseUrl + */`4-users?page=${currentPage}&count=${pageSize}`/*,{withCredentials:true,}*/).then(response=>response.data);
// }

