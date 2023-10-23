import {instance} from "common/api/api";

type ResponseType = {
  url: string
  resultCode: number
}
export const securityApi = {
  security() {
    return instance.get<ResponseType>('security/get-captcha-url')
  }
}