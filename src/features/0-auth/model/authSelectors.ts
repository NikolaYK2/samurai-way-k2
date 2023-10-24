import {AppStateType} from "app/model/redux-store";

export const myIdSelector = (state:AppStateType)=> state.loginAuthorization.id
export const isAuthSelect = (state:AppStateType) => state.loginAuthorization.isAuth

