import {AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {messagesPageReducer} from "features/redux/messagesPageReducer";
import {proFileReducer} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {usersReducer} from "features/redux/usersReducers";
import {sidebarReducer} from "features/redux/sidebarReducer";
import {ActionsTypeLoginAuthorization, authorizationReducer} from "features/0-auth/model/authReducer";
import {friendsReducer} from "features/redux/friendsReducer";
import {ActionsAppType, appReducer} from "app/appReducer";
import {loadState, saveState} from "common/utills/localStorage";
import {throttle} from "common/utills/throttle";

declare global {
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const persistedState = loadState();

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
},);

//функция нашего плагина для слежки за стором
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppStateType = ReturnType<typeof rootReducer>;
//Рудьюсеры отдаются стору, автоматически createStore создает внутри себя store
export const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunkMiddleware)));
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

//localStorage =========================
// Эта функция будет вызвана после каждого действия
store.subscribe(() => {
    // Вы можете получить текущее состояние хранилища с помощью store.getState()
    const state = store.getState();
    // Вы можете выбрать те части состояния, которые вы хотите сохранить
    const { proFilePage } = state;
    // Вы можете использовать вашу функцию saveState(), чтобы сохранить их в localStorage
    saveState({ proFilePage });
});

store.subscribe(

throttle(() => {
    const state = store.getState();

    const { proFilePage } = state;

   saveState({ proFilePage });
}, 1000)
);


// @ts-ignore
window.store = store;
