import {Dispatch} from "redux";
import {friendsAPI, UsersType} from "common/api/api";
import {AppThunk} from "app/model/redux-store";
import {unFollowThunkCreator} from "features/2-main/content/4-users/model/usersReducers";

export const statuses = {
  NOT_INITIALIZED: 'NOT_INITIALIZED',
  ERROR: 'ERRORS',
  INPROGRESS: 'INPROGRESS',
  CAPTCHA_REQUIRED: 'CAPTCHA_REQUIRED',
  SUCCESS: 'SUCCESS',
}

type FriendsReducerType = {
  status: string,
  users: UsersType[],
}
const initialState: FriendsReducerType = {
  status: statuses.NOT_INITIALIZED,
  users: [],

}
export const friendsReducer = (state = initialState, action: ActionsTypeFriendsReducer): FriendsReducerType => {
  switch (action.type) {
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case DELETE_FRIEND: {
      return {...state, users: [...state.users.map(f => f.id === action.userId ? {...f, f: false} : f)]}
    }
    default:
      return state;
  }
}

type  ActionsTypeFriendsReducer =
  | ReturnType<typeof setUsersFriendAC>
  | ReturnType<typeof setStatusFriendAC>
  | ReturnType<typeof deleteFriendAC>

const SET_USERS = 'FRIENDS/SET_USERS';
const SET_STATUS = 'FRIENDS/SET_STATUS';
const DELETE_FRIEND = 'FRIENDS/DEL-FR';
export const setUsersFriendAC = (users: UsersType[]) => ({type: SET_USERS, users} as const);
export const setStatusFriendAC = (status: string) => ({type: SET_STATUS, status} as const);
export const deleteFriendAC = (userId: string) => ({type: DELETE_FRIEND, userId} as const);


//THUNK ==============================================================================
export const setUsersFriendTC = () => (dispatch: Dispatch) => {

  friendsAPI.setUsersFriend().then(items => {
    dispatch(setStatusFriendAC(statuses.SUCCESS));
    dispatch(setUsersFriendAC(items));
  })
}

export const deleteUsersFriendTC = (userId:string): AppThunk => async (dispatch) => {
  unFollowThunkCreator(userId)
}

