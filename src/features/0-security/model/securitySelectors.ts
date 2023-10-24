import {AppStateType} from "app/model/redux-store";

export const captchaSelector = (state:AppStateType)=>state.security.captchaUrl
