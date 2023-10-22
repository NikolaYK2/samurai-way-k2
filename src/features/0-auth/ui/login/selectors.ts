import {AppStateType} from "app/redux-store";

export const loginSelector = (state: AppStateType) => state.loginAuthorization.isAuth