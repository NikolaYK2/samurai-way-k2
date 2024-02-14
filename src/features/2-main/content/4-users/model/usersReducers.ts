import {Dispatch} from "redux";
import {ResponsType, UsersType} from "common/api/api";
import {updObjInArray} from "common/utills/objHelpers";
import {usersAPI} from "features/2-main/content/4-users/api/usersApi";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const LOADING_SWITCH = 'LOADING_SWITCH';
const TOGGLE_EXPECTATION = 'TOGGLE_EXPECTATION';
const ADD_FRIENDS = 'USERS/SET_FRIENDS';

export type Expectation = {
  id: string,
}
export type InitializationStateType = {
  users: UsersType[],
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  loadingPage: boolean,
  expectation: (Expectation | string)[],
}
let initializationState: InitializationStateType = {
  users: [],
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  loadingPage: true,
  expectation: [],
}

export const usersReducer = (state: InitializationStateType = initializationState, action: ActionUsersType): InitializationStateType => {
  switch (action.type) {
    case FOLLOW:
      return {...state, users: updObjInArray(state.users, action.userId, {followed: true})};
    // return followedChange(state, action.userId, true)
    // return {...state, 4-users: state.4-users.map(u => u.id === action.userId ? {...u, followed: true} : u)};

    case UNFOLLOW:
      return {...state, users: updObjInArray(state.users, action.userId, {followed: false})};

    // return followedChange(state, action.userId, false)
    // return {...state, 4-users: state.4-users.map(u => u.id === action.userId ? {...u, followed: false} : u)};

    case SET_USERS:
      return {...state, users: [...action.users]};

    case ADD_FRIENDS:
      return {
        ...state,
        users: [
          ...state.users.filter(el => el.followed),
          ...action.friends.filter(friend => !state.users.some(user => user.id === friend.id))
        ]
      };
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page};

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalCount};

    case LOADING_SWITCH:
      return {...state, loadingPage: action.onOff};

    case TOGGLE_EXPECTATION:
      return {
        ...state, expectation: action.onOff
          ? [...state.expectation, action.userId]
          : state.expectation.filter(id => id !== action.userId)
      };

    default:
      return state;
  }
}


export type ActionUsersType =
  | FollowACType
  | UnFollowACType
  | SetUsersACType
  | SetFriendsACType
  | SetCurrentPageACType
  | SetTotalUsersCountACType
  | SwitchLoadingACType
  | ToggleExpectationACType;

//AC=================================================================
type FollowACType = ReturnType<typeof followAC>;
export const followAC = (userId: string) => {
  return {
    type: FOLLOW,
    userId,
  } as const;
}

export type UnFollowACType = ReturnType<typeof unFollowAC>;
export const unFollowAC = (userId: string) => {
  return {
    type: UNFOLLOW,
    userId,
  } as const;
}

type SetUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: UsersType[]) => {
  return {
    type: SET_USERS,
    users,
  } as const;
}

type SetFriendsACType = ReturnType<typeof addFriendsAC>;
export const addFriendsAC = (friends: UsersType[]) => {
  return {
    type: ADD_FRIENDS,
    friends,
  } as const;
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>;
export const setCurrentPageAC = (page: number) => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  } as const;
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>;
export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  } as const;
}

type SwitchLoadingACType = ReturnType<typeof switchLoadingAC>;
export const switchLoadingAC = (onOff: boolean) => {
  return {
    type: LOADING_SWITCH,
    onOff,
  } as const;
}

type ToggleExpectationACType = ReturnType<typeof toggleExpectationAC>;
export const toggleExpectationAC = (userId: string, onOff: boolean) => {
  return {
    type: TOGGLE_EXPECTATION,
    userId,
    onOff,
  } as const;
}


//THUNK =====================================================================
//COmponent UsersContiner ===================================================
export const getUsersThunkCreator = (page: number, pageSize: number, term?: string) => async (dispatch: Dispatch<ActionUsersType>) => {

  dispatch(switchLoadingAC(true));
  dispatch(setCurrentPageAC(page));
  try {

    let data = await usersAPI.getUsers(page, pageSize, false, term)
    dispatch(setTotalUsersCountAC(data.totalCount));
    dispatch(setUsersAC(data.items));
    dispatch(switchLoadingAC(false));

  } catch (e) {
    alert('Error get user')
  }
}

export const addFriendsThunkCreator = (
  page: number,
  pageSize: number,
  friend?: boolean,
  loaderStyle?: string,
  loader?: any,
  term?: string,
) => async (dispatch: Dispatch<ActionUsersType>) => {

  dispatch(switchLoadingAC(true));
  // dispatch(setCurrentPageAC(page));
  try {
    let data = await usersAPI.getUsers(page, pageSize, friend, term)


    if (loaderStyle && loader) {
      // Если в ответе нет друзей, это означает, что мы достигли конца списка.
      if (data.items.length === 0) {
        const loaderElement = document.querySelector(`.${loaderStyle}`);
        if (loaderElement) {
          loaderElement.remove(); // Удаляем заглушку
        }
        if (loader.current) loader.current.disconnect(); // Останавливаем наблюдение
      }
      dispatch(addFriendsAC(data.items));
    } else {
      dispatch(setTotalUsersCountAC(data.totalCount))
      dispatch(setUsersAC(data.items))
    }

    dispatch(switchLoadingAC(false));
  } catch (e) {
    alert('Error get user')
  }
}


export const pageChangeThunkCreator = (page: number) => async (dispatch: Dispatch<ActionUsersType>) => {
  dispatch(setCurrentPageAC(page));
  dispatch(switchLoadingAC(true));
  try {
    let data = await usersAPI.getUsers(page)
    dispatch(switchLoadingAC(false));
    dispatch(setUsersAC(data.items));

  } catch (e) {
    alert('Error page change')
  }
}
export const pageChangeFriendThunkCreator = (page: number) => async (dispatch: Dispatch<ActionUsersType>) => {
  dispatch(setCurrentPageAC(page));
  dispatch(switchLoadingAC(true));
  try {
    let data = await usersAPI.getUsers(page, 12, true)
    dispatch(switchLoadingAC(false));
    dispatch(setUsersAC(data.items));

  } catch (e) {
    alert('Error page change')
  }
}



// ----------------------------------------------------------------------------------------------------
const followUnFollowChange = async (
  dispatch: Dispatch<ActionUsersType>,
  id: string,
  apiMethod: (id: string) => Promise<ResponsType>,
  actionCreator: (id: string) => ActionUsersType) => {
  dispatch(toggleExpectationAC(id, true));
  try {
    let res = await apiMethod(id)
    if (res.resultCode === 0) {
      dispatch(actionCreator(id));
    }
  } catch (e) {
    console.error('Error unFollow and follow')
  }
  dispatch(toggleExpectationAC(id, false));

}

export const unFollowThunkCreator = (id: string) => async (dispatch: Dispatch<ActionUsersType>) => {
  await followUnFollowChange(dispatch, id, usersAPI.deleteFollow, unFollowAC)
}


export const followThunkCreator = (id: string) => async (dispatch: Dispatch<ActionUsersType>) => {
  await followUnFollowChange(dispatch, id, usersAPI.postFollow, followAC)
}
