import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {messagesPageReducer} from "features/redux/messagesPageReducer";
import {proFileReducer} from "features/redux/proFilePageReducer";
import {usersReducer} from "features/redux/usersReducers";
import {sidebarReducer} from "features/redux/sidebarReducer";
import {ActionsTypeLoginAuthorization, authorizationReducer} from "features/redux/authReducer";
import {friendsReducer} from "features/redux/friendsReducer";
import {ActionsAppType, appReducer} from "app/appReducer";

export let rootReducer = combineReducers({//функция которой передаем обьект внутри
// Воспринимать как state по сути
    messagesPage: messagesPageReducer,
    proFilePage: proFileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    loginAuthorization: authorizationReducer,
    friends: friendsReducer,
    app: appReducer,
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
    | ActionsTypeLoginAuthorization
    | ActionsAppType;

//TYPE THUNK ============================
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>

// @ts-ignore
window.store = store;
