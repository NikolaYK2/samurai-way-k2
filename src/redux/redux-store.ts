import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {messagesPageReducer} from "./messagesPageReducer";
import {sidebarReducer} from "./sidebarReducer";
import {proFileReducer} from "./proFilePageReducer";
import {usersReducer} from "./usersReducers";
import {ActionsTypeLoginAuthorization, loginAuthorizationReducer} from "./loginReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {friendsReducer} from "./friendsReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export let rootReducer = combineReducers({//функция которой передаем обьект внутри
// Воспринимать как state по сути
    messagesPage: messagesPageReducer,
    proFilePage: proFileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    loginAuthorization: loginAuthorizationReducer,
    friends: friendsReducer,
    // form: Controller,
    // form: useForm,
});

export type AppStateType = ReturnType<typeof rootReducer>;
//Рудьюсеры отдаются стору, автоматически createStore создает внутри себя store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//Что-бы работало нужно инициализировать

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

//Type DISPATCH =============
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

//Types action для всего app=============
export type ActionsType =
    | ActionsTypeLoginAuthorization;

//TYPE THUNK ============================
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>

// @ts-ignore
window.store = store;
