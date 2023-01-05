type LocationType = {
    city: string,
    country: string,
}

type PhotosType={
    small:string,
    large:string,
}
export type UsersType = {
    id: string,
    photos: PhotosType,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType,
}
export type InitializationStateType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    loadingPage: boolean,
}
// type InitializationStateType = typeof initializationState;


let initializationState: InitializationStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    loadingPage: true,
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

export type ActionUsersType = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | SwitchLoadingACType;

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
export const switchLoadingAC = (onOff:boolean)=>{
    return{
        type: LOADING_SWITCH,
        onOff,
    } as const;
}