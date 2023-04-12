import {Dispatch} from "redux";
import {authorizationAPI, RegisterLoginType} from "../components/api/api";
import {ActionsType, AppThunk} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';

export type loginType = {
    id: number | null,
    email?: string | null,
    login: string | null,
    password?: string | null,
    rememberMy?: boolean,
    isAuth: boolean,
}

let initializationState: loginType = {
    id: null,
    email: null,
    password: null,
    login: null,
    rememberMy: false,
    isAuth: false,
}

export const loginAuthorizationReducer = (state = initializationState, action: ActionsTypeLoginAuthorization): loginType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

//AC ===============================================================
export type ActionsTypeLoginAuthorization =
    | ReturnType<typeof setUserDataAC>;

export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth,
        }
    } as const;
}


//THUNK ============================================================================
export const authMeThunkC = () => (dispatch: Dispatch<ActionsType>) => {
    authorizationAPI.authorizeMe().then(data => {
        if (data.resultCode === 0) {
            const {id, email, login} = data.data;
            dispatch(setUserDataAC(id, email, login, true));
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

export const authLoginThunkC = (data: RegisterLoginType, setEr?: any): AppThunk => (dispatch) => {
    authorizationAPI.authorizeLogin(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                // const {email, password, rememberMe} = res.data.data;
                // dispatch(loginDataAC(email, password, rememberMe));
                dispatch(authMeThunkC())
            } else {
                const message = res.data.messages.length > 0 ? res.data.messages[0] : 'error';//Делаем проверку на случай прихода с сервера пустого массива
                dispatch(setEr(message))
            }
        })
}
//async ----
// export const authLoginThunkC = (data: RegisterLoginType): AppThunk => async dispatch => {
//     try {
//         const res = await authorizationAPI.authorizeLogin(data)
//         if (res.data.resultCode === 0) {
//             dispatch(authMeThunkC())
//         }
//     }catch (error){
//         throw new Error('error')
//     }
// }


export const logoutThunkC = () => (dispatch: Dispatch<ActionsType>) => {
    authorizationAPI.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false));
        }
    })
}

