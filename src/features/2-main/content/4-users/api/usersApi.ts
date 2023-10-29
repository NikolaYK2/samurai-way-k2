import {instance, ResponsType, UsersType} from "common/api/api";

export type GetUsersType = {
  items: UsersType[],
  totalCount: number,
  error: string,
}

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 12, friend = false, term?: string) {

    const params: Record<string, unknown> = {
      count: pageSize,
      page: currentPage,
      friend: friend
    };
    if (term !== undefined) {
      params.term = term
    }
    return instance.get<GetUsersType>(`users`, {params}).then(response => response.data);
  },
  deleteFollow(id: string) {
    return instance.delete<ResponsType<{}>>(`follow/${id}`).then(response => response.data);
  },
  postFollow(id: string) {
    return instance.post<ResponsType>(`follow/${id}`).then(response => response.data);
  },
}
