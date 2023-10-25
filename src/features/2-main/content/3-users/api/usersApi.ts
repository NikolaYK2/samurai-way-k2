import { instance, ResponsType, UsersType} from "common/api/api";

export type GetUsersType = {
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
