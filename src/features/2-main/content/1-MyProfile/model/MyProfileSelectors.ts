import {AppStateType} from "app/model/redux-store";
import {createSelector} from "reselect";

export const statusSelector = (state: AppStateType) => state.proFilePage.status
export const errorSelect = (state:AppStateType)=> state.proFilePage.error
export const userIdSelector = (state:AppStateType) => state.proFilePage.profile?.userId

const profileSelect = (state: AppStateType) => state.proFilePage.profile
export const optimizedProfileSelect = createSelector([profileSelect], (profile) => {
  return profile
})

const contactsSelect = (state: AppStateType) => state.proFilePage.profile?.contacts
export const optimizedProfileContactsSelect = createSelector([contactsSelect], (contacts) => {

  const names = contacts ? Object.keys(contacts) : []
  const meaning = contacts ? Object.values(contacts) : []

  return names.map((name,i)=> ({ name:name, link: meaning[i] }))
})

const postDataSelector = (state: AppStateType) => state.proFilePage.postData
export const optimizedPostDataSelector = createSelector([postDataSelector], (postData) => {
  return postData
})
