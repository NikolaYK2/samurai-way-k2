import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi, UpdProfileType} from "features/2-main/content/1-MyProfile/api/profileApi";
import {AppThunk} from "app/model/redux-store";
import {handleServerAppError, handleServerNetworkError} from "common/utills/errorsText";
//КОНСТАНТЫ ТИПОВ ЭКШЭНА=====================================================================
const addPost = 'addPost';
const setUserProfile = 'setUserProfile';
const setStatus = 'setStatus';
const deletePost = 'PROFILE/DELETE-POST';
const likePost = 'PROFILE/LIKE-POST';
const photoUserChange = 'PROFILE/CHANGE-PHOTO';
const bcUserChange = 'PROFILE/CHANGE-BACKGROUND';
const loadingToggle = 'PROFILE/LOADING-TOGGLE';
const errors = 'PROFILE/ERRORS';

export type ActionsTypeProfile = ReturnType<typeof addPostAC>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setStatusAC>
  | ReturnType<typeof setLikeAC>
  | ReturnType<typeof changePhotoAC>
  | ReturnType<typeof changeBackgroundAC>
  | ReturnType<typeof loadingAC>
  | ReturnType<typeof setErrorsAC>
//Type messages Users Type===========================================================================================================
//======function Action Creator addPoast==============================================================================
export const addPostAC = (postMessage: string) => {
  return {
    type: 'addPost',
    postMessage: postMessage,
  } as const//воспринимать весь обьект как константу
}

export const deletePostAC = (postId: string) => {
  return {
    type: deletePost,
    postId,
  } as const//воспринимать весь обьект как константу
}

export const setUserProfileAC = (profile: ProfileUserType | null) => {
  return {
    type: 'setUserProfile',
    profile,
  } as const
}


export const setStatusAC = (status: string) => {
  return {
    type: 'setStatus',
    status,
  } as const
}

export const setLikeAC = (postId: string, like: number) => {
  return {
    type: likePost,
    postId,
    like
  } as const
}

export const changePhotoAC = (photo: PhotosType) => {
  return {
    type: photoUserChange,
    photo,
  } as const
}

export const changeBackgroundAC = (bc: string) => {
  return {
    type: bcUserChange,
    bc,
  } as const
}

export const loadingAC = (toggle: boolean) => {
  return {
    type: loadingToggle,
    toggle
  } as const
}

export const setErrorsAC = (err: string | null) => {
  return {
    type: errors,
    err
  } as const
}


export type postDataType = {
  id: string,
  sms: string,
  like: number,
}
export type ContactsType = {
  facebook: string,
  website: string,
  vk: string,
  twitter: string,
  instagram: string,
  youtube: string,
  github: string,
  mainLink: string,
}
export type PhotosType = {
  small: string,
  large: string,
}
export type ProfileUserType = {
  userId: number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: ContactsType,
  photos: PhotosType
  aboutMe?: string,
}
export type proFilePageType = {
  postData: postDataType[],
  profile: ProfileUserType | null,
  status: string,
}
type ComponentStateType = {
  loading?: boolean
  error?: string | null
  background?: string,
}

let initializationState: proFilePageType & ComponentStateType = {
  postData: [
    {id: v1(), sms: "Ha, how are you?", like: 15,},
    {id: v1(), sms: "It's my first post", like: 43,},
  ],
  profile: {} as ProfileUserType,
  status: '',
};

export const proFileReducer = (state = initializationState, action: ActionsTypeProfile) => {

  if (action.type === addPost) {
    //Добавление нового поста кнопка=================================================
    return {...state, /*message: '', */postData: [{id: v1(), sms: action.postMessage, like: 0}, ...state.postData]}
    //MESSAGE USERS===============================`================================
  } else if (action.type === setUserProfile) {
    return {...state, profile: action.profile}

  } else if (action.type === setStatus) {
    //Добавление нового поста для change(update)=================================================
    return {...state, status: action.status}
    //MESSAGE USERS===============================`================================
  } else if (action.type === deletePost) {
    return {...state, postData: state.postData.filter(el => el.id !== action.postId)}

  } else if (action.type === likePost) {
    return {...state, postData: state.postData.map(el => el.id === action.postId ? {...el, like: action.like + 1} : el)}

  } else if (action.type === photoUserChange) {
    return {
      ...state,
      profile: state.profile
        ? {...state.profile, photos: action.photo}
        : null,
    }
  } else if (action.type === loadingToggle) {
    return {...state, loading: action.toggle};

  } else if (action.type === bcUserChange) {
    return {...state, background: action.bc};

  } else if (action.type === errors) {
    return {...state, error: action.err};
  }
  return state;
}

//THUNK =============================================================
export const getUserProfileThunkCreator = (userId: number) => async (dispatch: Dispatch<ActionsTypeProfile>) => {
  dispatch(loadingAC(true))
  try {
    let data = await profileApi.getUserProfile(userId)
    dispatch(setUserProfileAC(data));
  } catch (e) {
    alert('Error get 4-users')
  } finally {
    dispatch(loadingAC(false))
  }
}

export const updUserProfileThunkCreator = (updProfile: UpdProfileType): AppThunk => async (dispatch, getState) => {
  const id = getState().loginAuthorization.id
  dispatch(loadingAC(true))
  try {
    let res = await profileApi.updUserProfile(updProfile)
    if (res.data.resultCode === 0 && id) {
      dispatch(getUserProfileThunkCreator(id))
    }

  } catch (e) {
    handleServerNetworkError(e, dispatch)
  } finally {
    dispatch(loadingAC(false))
  }
}

export const setStatusThunkCreator = (userId: number) => async (dispatch: Dispatch<ActionsTypeProfile>) => {
  let res = await profileApi.getProfileStatusUser(userId)
  dispatch(loadingAC(true))
  try {
    if (res.data && res.data.resultCode === 0) {
      dispatch(setStatusAC(res.data));
      // dispatch(loadingAC(false))
    }
  } catch (e) {
    handleServerNetworkError(e, dispatch)
  }finally {
    dispatch(loadingAC(false))
  }
}

export const updStatusThunkCreator = (status: string) => async (dispatch: Dispatch<ActionsTypeProfile>) => {
  let res = await profileApi.updProfileStatus(status)
  try {
    if (res.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }else {
      handleServerAppError(res.data, dispatch)
    }
  } catch (e) {
    handleServerNetworkError(e, dispatch)
  }
}

export const changePhotoTC = (file: File) => async (dispatch: Dispatch<ActionsTypeProfile>) => {
  const formData = new FormData();
  formData.append('file', file)

  let res = await profileApi.changePhotoUser(formData)
  dispatch(loadingAC(true))

  try {
    if (res.data.resultCode === 0) {
      dispatch(changePhotoAC(res.data.data));
      dispatch(loadingAC(false))
    }
  } catch (e) {
    alert('Error upd status')
  }
}
