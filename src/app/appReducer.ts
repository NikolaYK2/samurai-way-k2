import {AppThunk} from "app/redux-store";
import {authMeThunkC} from "features/redux/loginReducer";


export type initializationStateType = {
    initialized: boolean,
}

let initializationState: initializationStateType = {
    initialized: false
}

export const appReducer = (state = initializationState, action: ActionsAppType): initializationStateType => {
    switch (action.type) {
        case 'app/INITIALIZED-APP': {
            return {...state, initialized: action.value};
        }
        default:
            return state;
    }
};

//AC ===============================================================
export type ActionsAppType =
    | ReturnType<typeof initializedAppAC>;

export const initializedAppAC = (value: boolean) => ({type: 'app/INITIALIZED-APP', value} as const);


//THUNK ============================================================================
export const initializedAppThunkC = (): AppThunk => (dispatch) => {
    let promise = dispatch(authMeThunkC());
    promise.then(() => {
        dispatch(initializedAppAC(true));
    })
}


