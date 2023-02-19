import axios from "axios";
import {UsersType} from "../../redux/usersReducers";
import {ProfileUserType} from "../../redux/proFilePageReducer";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'ac221b8b-8a64-47b0-b88a-297bbd35a29e'},
});

type DeletePostFolType = {
    resultCode: number
    messages: string[],
    data: {}
}
type GetUsersType = {
    items: UsersType[],
    totalCount: number,
    error: string,
}
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance./*axios.*/get<GetUsersType>(/*baseUrl + */`users?page=${currentPage}&count=${pageSize}`/*,{withCredentials:true,}*/).then(response => response.data);
    },
    deleteFollow(id: string) {
        return instance.delete<DeletePostFolType>(`follow/${id}`).then(response => response.data);
    },
    postFollow(id: string) {
        return instance.post<DeletePostFolType>(`follow/${id}`).then(response => response.data);
    },
    getUserProfile(userId: number) {
        return instance.get<ProfileUserType>(`profile/${userId}`).then(response => response.data);
    },
}

// export const getUsers =(currentPage = 1, pageSize = 10)=>{
//     return instance./*axios.*/get(/*baseUrl + */`users?page=${currentPage}&count=${pageSize}`/*,{withCredentials:true,}*/).then(response=>response.data);
// }
