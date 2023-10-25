import {AppThunk} from "app/model/redux-store";
import {authMeThunkC} from "features/0-auth/model/authReducer";


export type initializationStateType = {
  initialized: boolean,
  errors: string | null,
}

let initializationState: initializationStateType = {
  initialized: false,
  errors: null,
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
export const initializedAppThunkC = (): AppThunk => async (dispatch) => {

  await dispatch(authMeThunkC());
  try {
    dispatch(initializedAppAC(true));
  } catch (e) {

  } finally {
    dispatch(initializedAppAC(true));
  }
}
// export const initializedAppThunkC = (): AppThunk => (dispatch) => {
//     let promise = dispatch(authMeThunkC());
//     promise
//         .then(() => {
//             dispatch(initializedAppAC(true));
//         })
//         .finally(() => {
//             dispatch(initializedAppAC(true));
//
//         })
// }


