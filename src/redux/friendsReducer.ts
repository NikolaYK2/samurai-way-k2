import {Dispatch} from "redux";
import {friendsAPI, UsersType} from "../components/api/api";

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
        default:
            return state;
    }
}

type  ActionsTypeFriendsReducer = ReturnType<typeof setUsersFriendAC> | ReturnType<typeof setStatusFriendAC>;

const SET_USERS = 'SN/FRIENDS/SET_USERS';
const SET_STATUS = 'SN/FRIENDS/SET_STATUS';
export const setUsersFriendAC = (users: UsersType[]) => ({type: SET_USERS, users} as const);
export const setStatusFriendAC = (status: string) => ({type: SET_STATUS, status} as const);



//THUNK ==============================================================================
export const setUsersFriendTC =()=>{
    return (dispatch:Dispatch)=>{

        friendsAPI.setUsersFriend().then(items=>{
            dispatch(setStatusFriendAC(statuses.SUCCESS));
            dispatch(setUsersFriendAC(items));
        })
    }
}
