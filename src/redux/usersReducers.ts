type LocationType = {
    city: string,
    country: string,
}
export type UsersType = {
    id: string,
    photos: string,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType,
}
export type InitializationStateType = {
    users: UsersType[],
}
// type InitializationStateType = typeof initializationState;


let initializationState: InitializationStateType = {
    users:[],
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
            return {...state, users:[...action.users]};

        default:
            return state;
    }
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET_USERS';

export type ActionUsersType = FollowACType | UnFollowACType | SetUsersACType;

type FollowACType = ReturnType<typeof followAC>;
export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        userId,
    }as const;
}

type UnFollowACType = ReturnType<typeof unFollowAC>;
export const unFollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId,
    }as const;
}

type SetUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users,
    }as const;
}