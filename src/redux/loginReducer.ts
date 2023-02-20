import {Dispatch} from "redux";
import {authorizationAPI} from "../components/api/api";

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
            return {...state, ...action.data, isAuth: true};

        default:
            return state;
    }
};

//AC ===============================================================
export type ActionsTypeLoginAuthorization =
    ReturnType<typeof setUserDataAC>;

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
