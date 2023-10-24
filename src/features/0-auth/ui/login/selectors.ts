import {AppStateType} from "app/model/redux-store";

export const loginSelector = (state: AppStateType) => state.loginAuthorization.isAuth