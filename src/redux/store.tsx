import {v1} from "uuid";
import {messagesPageReducer} from "./messagesPageReducer";
import {proFileReducer} from "./proFilePageReducer";
import {sidebarReducer} from "./sidebarReducer";
import {AppStateType} from "./redux-store";
//=======State========================================================
// export type usersType = {
//     id: string,
//     name: string,
//     link: string,
//     avatar: string,
// }

// export type usersMessagesType = {
//     id: string,
//     sms: string,
// }

// export type postDataType = {
//     id: string,
//     sms: string,
//     like: number,
// }

// export type friendsType = {
//     id: string,
//     name: string,
//     avatar: string,
// }
// export type  messagesPageType = {
//     users: usersType[],
//     message: string,
//     usersMessages: usersMessagesType[],
// }
//
// export type proFilePageType = {
//     postData: postDataType[],
//     message: string,
//
// }

// export type sidebarType = {
//     friends: friendsType[],
// }

// export type stateType = {
//     messagesPage: messagesPageType,
//     proFilePage: proFilePageType,
//     sidebar: sidebarType,
// }
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

//КОНСТАНТЫ ТИПОВ ЭКШЭНА=====================================================================
// const addPost = 'addPost';
// const addPostChange = 'addPostChange';
// const addMessageUsers = 'addMessageUsers';
// const addMessageUsersChange = 'addMessageUsersChange';
//==========================================================================================

// //=====типизация actions add post==============================================================================
// // type AddPostActionType ={
// //     type: 'addPost'
// //     postMessage: string,
// //
// // }
// // type AddPostChangeActionType ={
// //     type: 'addPostChange'
// //     postMessage: string,
// // }
// //Автоматическое определение типа функции=============================================================
// // type AddPostActionType = ReturnType<typeof addPostAC>;
// // type AddPostChangeActionType = ReturnType<typeof addPostChangeActionCreator>;
// export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof addPostChangeAC>;
// //Type messages Users Type===========================================================================================================
// export type ActionsTypeMessagesUsers = ReturnType<typeof addMessageUsersAC> | ReturnType<typeof addMessageUsersChangeAC>;
// export type ActionTypeFull = ActionsType | ActionsTypeMessagesUsers;
// //======function Action Creator addPoast==============================================================================
// export const addPostAC = (postMessage: string) => {
//     return {
//         type: 'addPost',
//         postMessage: postMessage,
//     } as const//воспринимать весь обьект как константу
// }
// export const addPostChangeAC = (event: ChangeEvent<HTMLTextAreaElement>)/*: AddPostChangeActionType - типизировали функцию вверху*/ => {
//     return {
//         type: 'addPostChange',
//         postMessage: event.currentTarget.value,
//     } as const
// }
//
// //FUNCTION ADD MESSAGES USERS=ЭКШЭН КРИЕЙТЕРЫ - AC======================================================
// export const addMessageUsersAC = (newMessageUsers: string) => {
//     return {
//         type: 'addMessageUsers',
//         newMessageUsers: newMessageUsers,
//     } as const
// }
// export const addMessageUsersChangeAC = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     return {
//         type: 'addMessageUsersChange',
//         newMessageUsers: event.currentTarget.value
//     } as const
// }

// ==========================================================================================================
// export let store: StoreType = {
//     _state: {//_state - Приватный доступ означает _подчеркивание
//         //DATA messagesUsers /dialogs/=============================================================
//         messagesPage: {
//             users: [
//                 {
//                     id: v1(),
//                     name: "Nik",
//                     link: "1",
//                     avatar: 'https://avatars.mds.yandex.net/get-ott/223007/2a0000016928ac39a6e32ce5657d59f31eb4/1344x756',
//                 },
//                 {
//                     id: v1(),
//                     name: "Vita",
//                     link: "2",
//                     avatar: "https://w7.pngwing.com/pngs/991/871/png-transparent-red-heart-illustration-heart-dark-red-heart-hd-love-image-file-formats-heart.png"
//                 },
//                 {
//                     id: v1(),
//                     name: "Vova",
//                     link: "3",
//                     avatar: 'https://i.pinimg.com/736x/e3/0e/94/e30e94e1b33eb88b6ab807050ad7ff2f.jpg'
//                 },
//                 {
//                     id: v1(),
//                     name: "Dima",
//                     link: "4",
//                     avatar: 'https://crosti.ru/patterns/00/18/72/5109ae65df/picture.jpg'
//                 },
//             ],
//             message: '',
//             usersMessages: [
//                 {id: v1(), sms: "Hi",},
//                 {id: v1(), sms: "How is your",},
//                 {id: v1(), sms: "Eeeee",},
//                 {id: v1(), sms: "Cool",},
//             ],
//         },
//         //=============PostData /MyProfile/====================================
//         proFilePage: {
//             message: "",
//             postData: [
//                 {id: v1(), sms: "Ha, how are you?", like: 15,},
//                 {id: v1(), sms: "It's my first post", like: 43,},
//             ],
//
//         },
//         //=========Friends======================================================
//         sidebar: {
//             friends: [
//                 {
//                     id: v1(),
//                     name: "Denis",
//                     avatar: "https://i.pinimg.com/originals/56/7a/4c/567a4cc9870f8d8e3d03362732760e2c.jpg",
//                 },
//                 {
//                     id: v1(),
//                     name: "Diana",
//                     avatar: 'https://oir.mobi/uploads/posts/2021-05/1621874225_1-oir_mobi-p-krasivie-milie-kroliki-zhivotnie-krasivo-f-1.jpg'
//                 },
//                 {
//                     id: v1(),
//                     name: "Lolita",
//                     avatar: 'https://png.pngtree.com/element_our/20200703/ourlarge/pngtree-q-version-cute-cartoon-cute-little-animals-zodiac-signs-pig-image_2298838.jpg'
//                 },
//             ]
//         },
//     },
//
//     //Добавление нового поста кнопка=================================================
// //     addPost(/*postMessage: string*/) {//postMessage - берем это напрямую из state
// //         const newPost: postDataType ={id: v1(), sms: this._state.proFilePage.message, like: 0,};//МОжно через переменную, протипизировав ее указав postDataType
// //         this._state.proFilePage.postData = [newPost, ...this._state.proFilePage.postData];
// //         // state.proFilePage.postData.push(newPost);
// //         // this._state.proFilePage.postData.push({id: v1(), sms: /*postMessage*/ this._state.proFilePage.message, like: 0,});
// //         this._state.proFilePage.message = '';//зачищаем строку здесь
// //         this._rerenderEntireTree(store);
// //     },
// // //Добавление нового поста для change=================================================
// //     addPostChange(postMessage: string) {
// //         this._state.proFilePage.message = postMessage;//message = переменной newTextPost, в которую будем сам и вписывать знаечния(контралируемая)
// //         this._rerenderEntireTree(store);
// //     },
// //=====================================================================
// //MESSAGE USERS===============================================================
// //add new message users=============================================
// //     addMessageUsers() {
// //         this._state.messagesPage.usersMessages.push({id: v1(), sms: this._state.messagesPage.message,});
// //         this._state.messagesPage.message = '';
// //         this._rerenderEntireTree(store);
// //     },
// // //add Для Change update==========
// //     addMessageUsersChange(newMessageUsers: string) {
// //         this._state.messagesPage.message = newMessageUsers;
// //         this._rerenderEntireTree(store);
// //     },
// //=================================================================
//     //Рундерим =================================================================
//      _rerenderEntireTree() {//Функция отрисовки всего дерева
//     },
//     //render ================================================================
//     subscribe(observer: () => void,) {
//         this._rerenderEntireTree = observer;
//     },
//     //Возвращает state=====================
//     getState() {
//         return this._state
//     },
//     dispatch(action) {//{type: 'addPost'
//         this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
//         this._state.proFilePage = proFileReducer(this._state.proFilePage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//         this._rerenderEntireTree(store);
//         // if (action.type === addPost) {
//         //     //Добавление нового поста кнопка=================================================
//         //     const newPost: postDataType = {id: v1(), sms: action.postMessage, like: 0,};//МОжно через переменную, протипизировав ее указав postDataType
//         //     this._state.proFilePage.postData = [newPost, ...this._state.proFilePage.postData];
//         //     // state.proFilePage.postData.push(newPost);
//         //     // this._state.proFilePage.postData.push({id: v1(), sms: /*postMessage*/ this._state.proFilePage.message, like: 0,});
//         //     this._state.proFilePage.message = '';//зачищаем строку здесь
//         //     this._rerenderEntireTree(store);
//         // } else if (action.type === addPostChange) {
//         //     //Добавление нового поста для change(update)=================================================
//         //     //     this._state.proFilePage.message = postMessage;//message = переменной newTextPost, в которую будем сам и вписывать знаечния(контралируемая)
//         //     this._state.proFilePage.message = action.postMessage;//Нужно упаковать для action, так как с переменной теперь работать не будет
//         //     this._rerenderEntireTree(store);
//         //     //MESSAGE USERS===============================`================================
//         // } else if (action.type === addMessageUsers) {
//         //     //add new message users=============================================
//         //     // this._state.messagesPage.usersMessages.push({id: v1(), sms: action.newMessageUsers,});
//         //     const newMessages = {id: v1(), sms: action.newMessageUsers,}
//         //     this._state.messagesPage.usersMessages = [...this._state.messagesPage.usersMessages, newMessages];
//         //     this._state.messagesPage.message = '';
//         //     this._rerenderEntireTree(store);
//         // } else if (action.type === addMessageUsersChange) {
//         //     //add Для Change update==========
//         //     this._state.messagesPage.message = action.newMessageUsers;
//         //     this._rerenderEntireTree(store);
//         // }
//     }
// }


