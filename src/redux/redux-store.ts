import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {ActionsTypeMessagesUsers, messagesPageReducer} from "./messagesPageReducer";
import {sidebarReducer} from "./sidebarReducer";
import {ActionsTypeProfile, proFileReducer} from "./proFilePageReducer";
import {stateType} from "./store";

export type StoreType = {
    _state: stateType,
    // addPost: () => void,
    // addPostChange: (postMessage: string) => void,
    // addMessageUsers: () => void,
    // addMessageUsersChange: (newMessageUsers: string) => void,
    _rerenderEntireTree: (store: StoreType) => void,
    subscribe: (observer: () => void) => void,
    getState: () => stateType,
    dispatch: (action: ActionTypeFull) => void,
}

export type ActionTypeFull = ActionsTypeProfile | ActionsTypeMessagesUsers;
// export type RootState = typeof reducers;//Типизируем редусер
// export type ReduxStateType = ReturnType<RootState>;//хз что это
// export type StoreType = Store<ReduxStateType, ActionTypeFull>;//Типизируем стор в нашем редюсере

export let reducers = combineReducers({//функция которой передаем обьект внутри
// Воспринимать как state по сути
    messagesPage: messagesPageReducer,
    proFilePage: proFileReducer,
    sidebar: sidebarReducer,
});
//Рудьюсеры отдаются стору, автоматически createStore создает внутри себя store
export let store: StoreType = createStore(reducers);
//Что-бы работало нужно инициализировать
