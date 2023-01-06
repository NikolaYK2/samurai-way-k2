import axios from "axios";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'ac221b8b-8a64-47b0-b88a-297bbd35a29e'},
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance./*axios.*/get(/*baseUrl + */`users?page=${currentPage}&count=${pageSize}`/*,{withCredentials:true,}*/).then(response => response.data);
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`).then(response=>response.data);
    },
    postFollow(id) {
        return instance.post(`follow/${id}`).then(response=>response.data);
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response=>response.data);
    },
}

// export const getUsers =(currentPage = 1, pageSize = 10)=>{
//     return instance./*axios.*/get(/*baseUrl + */`users?page=${currentPage}&count=${pageSize}`/*,{withCredentials:true,}*/).then(response=>response.data);
// }
