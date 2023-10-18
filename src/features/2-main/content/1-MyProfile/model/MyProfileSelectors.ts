import {AppStateType} from "app/redux-store";
import {createSelector} from "reselect";

export const statusSelector = (state:AppStateType)=>state.proFilePage.status

const profileSelect = (state:AppStateType)=>state.proFilePage.profile
export const optimizedProfileSelect = createSelector([profileSelect],(profile)=>{
  return profile
})

const postDataSelector = (state:AppStateType) =>state.proFilePage.postData
export const optimizedPostDataSelector = createSelector([postDataSelector],(postData)=>{
  return postData
})
