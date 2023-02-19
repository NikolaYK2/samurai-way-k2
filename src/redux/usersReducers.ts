import {Dispatch} from "redux";
import {usersAPI} from "../components/api/api";

// type LocationType = {
//     city: string,
//     country: string,
// }

type PhotosType = {
    small: string,
    large: string,
}
export type Expectation = {
    id: string,
}
export type UsersType = {
    id: string,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean,
    // location: LocationType,
}
export type InitializationStateType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    loadingPage: boolean,
    expectation: (Expectation | string)[],
}
// type InitializationStateType = typeof initializationState;


let initializationState: InitializationStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    loadingPage: true,
    expectation: [],

    // users: [
    //     {
    //         id: v1(),
    //         avatar:'https://thypix.com/wp-content/uploads/2021/05/baby-yoda-77-700x474.jpg',
    //         followed: false,
    //         fullName: "Nikolay",
    //         status: 'I am a cool chell',
    //         location: {city: 'Molodechno', country: 'Belarus'}
    //     },
    //     {
    //         id: v1(),
    //         avatar: 'https://abrakadabra.fun/uploads/posts/2021-12/1639843636_2-abrakadabra-fun-p-milie-vedmi-2.jpg',
    //         followed: true,
    //         fullName: "Vitalia",
    //         status: 'Wife',
    //         location: {city: 'Zibkovo', country: 'Ukraine'}
    //     },
    //     {
    //         id: v1(),
    //         avatar:'https://klike.net/uploads/posts/2020-01/1578990591_1.jpeg',
    //         followed: false,
    //         fullName: "Dima",
    //         status: 'Cool friends',
    //         location: {city: 'Varshava', country: 'Polish'}
    //     },
    // ]
}

export const usersReducer = (state: InitializationStateType = initializationState, action: ActionUsersType): InitializationStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)};

        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)};

        case SET_USERS:
            // return {...state, users:[...state.users, ...action.users]};
            return {...state, users: [...action.users]};

        case SET_CURRENT_PAGE:
            // return {...state, users:[...state.users, ...action.users]};
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

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const LOADING_SWITCH = 'LOADING_SWITCH';
const TOGGLE_EXPECTATION = 'TOGGLE_EXPECTATION';

export type ActionUsersType = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | SwitchLoadingACType
    | ToggleExpectationACType;

type FollowACType = ReturnType<typeof followAC>;
export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        userId,
    } as const;
}

type UnFollowACType = ReturnType<typeof unFollowAC>;
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
export const getUsersThunkCreator = (/*currentPage:number, pageSize:number*/) => {
    return (dispatch: Dispatch<ActionUsersType>) => {
        //Get Ничего кроме адреса мы отправить не можем, когда ответ с сервера придет, пишем .then(response=> и можем выполнить какую-то логику)
        dispatch(switchLoadingAC(true));

        usersAPI.getUsers(/*currentPage, pageSize*/).then(data => {
            dispatch(switchLoadingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
        })
    }
}
export const pageChangeThunkCreator = (page: number, /*pageSize: number*/) => {
    return (dispatch: Dispatch<ActionUsersType>) => {
        dispatch(setCurrentPageAC(page));
        dispatch(switchLoadingAC(true));

        usersAPI.getUsers(page, /*pageSize*/)
            /* axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,{
                 withCredentials:true,
             })*/.then(data => {
            dispatch(switchLoadingAC(false));
            dispatch(setUsersAC(data.items));
        })
    }
}
//COmponent User ===================================================
export const unFollowThunkCreator = (id: string) => {
    return (dispatch: Dispatch<ActionUsersType>) => {
        dispatch(toggleExpectationAC(id,true));

        usersAPI.deleteFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowAC(id));
            }
            dispatch(toggleExpectationAC(id,false));
        });
        // props.toggleExpectation(id,true, );
        // usersAPI.deleteFollow(id).then(data => {
        //     if (data.resultCode === 0) {
        //         props.unFollow(id);
        //     }
        //     props.toggleExpectation(id,false);
        // });

    }
}
export const followThunkCreator = (id: string) => {
    return (dispatch: Dispatch<ActionUsersType>) => {
        dispatch(toggleExpectationAC(id,true));

        usersAPI.postFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(id));
            }
            dispatch(toggleExpectationAC(id,false));
        });
    }
}