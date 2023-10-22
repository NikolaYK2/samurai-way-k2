import {AppStateType} from "app/redux-store";
import {createSelector} from "reselect";

const profileSelector = (state: AppStateType) => state.proFilePage.profile
export const optimizedProfileSelector = createSelector([profileSelector], (elem) => {
  return elem
})

export const myIdSelector = (state: AppStateType) => state.loginAuthorization.id

export const isAuthSelector = (state: AppStateType) => state.loginAuthorization.isAuth

export const loadingToggleSelector = (state: AppStateType) => state.proFilePage.loading

export const bcSelector = (state:AppStateType)=> state.proFilePage.background
