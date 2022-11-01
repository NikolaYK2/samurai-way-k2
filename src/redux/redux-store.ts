import {combineReducers, legacy_createStore as createStore} from "redux";
import {messagesPageReducer} from "./messagesPageReducer";
import {sidebarReducer} from "./sidebarReducer";
import {proFileReducer} from "./proFilePageReducer";
import {usersReducer} from "./usersReducers";

// export type StoreType = {
//     _state: stateType,
//     // addPost: () => void,
//     // addPostChange: (postMessage: string) => void,
//     // addMessageUsers: () => void,
//     // addMessageUsersChange: (newMessageUsers: string) => void,
//     _rerenderEntireTree: (store: StoreType) => void,
//     subscribe: (observer: () => void) => void,
//     getState: () => stateType,
//     dispatch: (action: ActionTypeFull) => void,
// }
//
// export type stateType = {
//     messagesPage: messagesPageType,
//     proFilePage: proFilePageType,
//     sidebar: sidebarType,
// }

// export type ActionTypeFull = ActionsTypeProfile | ActionsTypeMessagesUsers;
// export type RootState = typeof reducers;//Типизируем редусер
// export type ReduxStateType = ReturnType<RootState>;//хз что это
// export type StoreType = Store<ReduxStateType, ActionTypeFull>;//Типизируем стор в нашем редюсере

export let rootReducer = combineReducers({//функция которой передаем обьект внутри
// Воспринимать как state по сути
    messagesPage: messagesPageReducer,
    proFilePage: proFileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
});


export type AppStateType = ReturnType<typeof rootReducer>;
//Рудьюсеры отдаются стору, автоматически createStore создает внутри себя store
export const store = createStore(rootReducer);
//Что-бы работало нужно инициализировать
