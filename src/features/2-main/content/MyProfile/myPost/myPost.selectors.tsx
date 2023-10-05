import {AppStateType} from "app/redux-store";
import {createSelector} from "reselect";

const postDataSelector = (state:AppStateType) =>state.proFilePage.postData
export const optimizedPostDataSelector = createSelector([postDataSelector],(postData)=>{
  return postData
})