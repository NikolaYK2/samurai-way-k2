import {instance, ResponsType} from "common/api/api";

type DataAuthType = {
  id: number,
  email: string,
  login: string,
}
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
