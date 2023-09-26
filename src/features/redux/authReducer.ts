import {Dispatch} from "redux";
import {authorizationAPI, RegisterLoginType} from "common/api/api";
import {ActionsType, AppThunk} from "app/redux-store";

const SET_USER_DATA = 'auth/SET_USER_DATA';

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

export const authorizationReducer = (state = initializationState, action: ActionsTypeLoginAuthorization): loginType => {
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
export const authMeThunkC = () => async (dispatch: Dispatch<ActionsType>) => {

    let res = await authorizationAPI.authorizeMe()
    try {
        if (res.resultCode === 0) {
            const {id, email, login} = res.data;
            dispatch(setUserDataAC(id, email, login, true));
        }
    } catch (e) {
        alert('Error authorization')
    }
}
// export const authMeThunkC = () => (dispatch: Dispatch<ActionsType>) => {
//
//     return authorizationAPI.authorizeMe().then(data => {
//         if (data.resultCode === 0) {
//             const {id, email, login} = data.data;
//             dispatch(setUserDataAC(id, email, login, true));
//         }
//     })
//     // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//     //     withCredentials: true
//     // }).then(response => {
//     //     if (response.data.resultCode === 0) {
//     //         let {id, email, login} = response.data.data
//     //         this.props.setUserData(id, email, login)
//     //     }
//     // })
// }

//async ----
export const authLoginThunkC = (data: RegisterLoginType, setError?: (text: string) => void): AppThunk => async (dispatch) => {
    try {
        const res = await authorizationAPI.authorizeLogin(data)
        if (res.data.resultCode === 0) {
            dispatch(authMeThunkC())
        } else {
            const message = res.data.messages.length > 0 ? res.data.messages[0] : 'error';//Делаем проверку на случай прихода с сервера пустого массива
            if (setError) {
                setError(message)
            }
        }
    } catch (e) {
        alert('Error authLogin')
    }
}
// export const authLoginThunkC = (data: RegisterLoginType, setError?: (text: string) => void): AppThunk => (dispatch) => {
//     authorizationAPI.authorizeLogin(data).then(res => {
//         if (res.data.resultCode === 0) {
//             dispatch(authMeThunkC())
//         } else {
//             const message = res.data.messages.length > 0 ? res.data.messages[0] : 'error';//Делаем проверку на случай прихода с сервера пустого массива
//             if (setError) {
//                 setError(message)
//             }
//         }
//     })
// }


export const logoutThunkC = () => async (dispatch: Dispatch<ActionsType>) => {

    let res = await authorizationAPI.logout()
    try {
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false));
        }

    } catch (e) {
        alert('Error logout')
    }
}
// export const logoutThunkC = () => (dispatch: Dispatch<ActionsType>) => {
//
//     authorizationAPI.logout().then(res => {
//         if (res.data.resultCode === 0) {
//             dispatch(setUserDataAC(null, null, null, false));
//         }
//     })
// }

