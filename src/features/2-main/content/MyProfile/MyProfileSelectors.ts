import {AppStateType} from "app/redux-store";

export const statusSelector = (state:AppStateType)=>state.proFilePage.status
