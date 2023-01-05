const SET_USER_DATA = 'SET_USER_DATA';

export type loginType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

let initializationState: loginType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const loginAuthorizationReducer = (state = initializationState, action: ActionsTypeLoginAuthorization): loginType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth:true};

        default:
            return state;
    }
};


export type ActionsTypeLoginAuthorization =
    ReturnType<typeof setUserDataAC>;

export const setUserDataAC = (id:number, email:string, login:string) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
        }
    } as const;
}