import {Dispatch} from "redux";
import {authorizationAPI, registerLoginType} from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_DATA = 'LOGIN_DATA';

export type loginType = {
    id: number | null,
    email: string | null,
    login: string | null,
    password: string | null,
    rememberMy: boolean,
    isAuth: boolean,
}

let initializationState: loginType = {
    id: null,
    email: null,
    login: null,
    password: null,
    rememberMy: false,
    isAuth: false,
}

export const loginAuthorizationReducer = (state = initializationState, action: ActionsTypeLoginAuthorization): loginType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true};
        case LOGIN_DATA:
            return {...state, email: action.email, password: action.password, rememberMy: action.rememberMy, isAuth: true};

        default:
            return state;
    }
};

//AC ===============================================================
export type ActionsTypeLoginAuthorization = ReturnType<typeof setUserDataAC>
    | ReturnType<typeof loginDataAC>;

export const setUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login,
        }
    } as const;
}

export const loginDataAC = (email: string, password: string, rememberMy: boolean) => {
    return {
        type: LOGIN_DATA,
        email,
        password,
        rememberMy,
    } as const;
}

//THUNK ============================================================================
export const loginMeThunkC = () => {

    return (dispatch: Dispatch<ActionsTypeLoginAuthorization>) => {

        authorizationAPI.authorizeMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserDataAC(id, email, login));
            }
        })
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // }).then(response => {
        //     if (response.data.resultCode === 0) {
        //         let {id, email, login} = response.data.data
        //         this.props.setUserData(id, email, login)
        //     }
        // })
    }
}
export const authLoginThunkC = (data: registerLoginType) => {

    return (dispatch: Dispatch<ActionsTypeLoginAuthorization>) => {

        authorizationAPI.authorizeLogin(data).then(res => {
            if (res.data.resultCode === 0) {
                let {email, password, rememberMe} = res.data.data;
                dispatch(loginDataAC(email, password, rememberMe));
            }
        })
    }
}
