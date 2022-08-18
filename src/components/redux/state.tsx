import {v1} from "uuid";
//=======State========================================================
export type usersType = {
    id: string,
    name: string,
    link: string,
    avatar: string,
}

export type usersMessagesType = {
    id: string,
    sms: string,
}

export type postDataType = {
    id: string,
    sms: string,
    like: number,
}

export type friendsType = {
    id: string,
    name: string,
    avatar: string,
}
export type  messagesPageType = {
    users: usersType[],
    message: string,
    usersMessages: usersMessagesType[],
}

export type proFilePageType = {
    postData: postDataType[],
    message: string,

}

export type sidebarType = {
    friends: friendsType[],
}

export type stateType = {
    proFilePage: proFilePageType,
    messagesPage: messagesPageType,
    sidebar: sidebarType,
}

let rerenderEntireTree = (state: stateType) => {
}

export let state: stateType = {
    //DATA messagesUsers /dialogs/=============================================================
    messagesPage: {
        users: [
            {
                id: v1(),
                name: "Nik",
                link: "1",
                avatar: 'https://avatars.mds.yandex.net/get-ott/223007/2a0000016928ac39a6e32ce5657d59f31eb4/1344x756',
            },
            {
                id: v1(),
                name: "Vita",
                link: "2",
                avatar: "https://w7.pngwing.com/pngs/991/871/png-transparent-red-heart-illustration-heart-dark-red-heart-hd-love-image-file-formats-heart.png"
            },
            {
                id: v1(),
                name: "Vova",
                link: "3",
                avatar: 'https://i.pinimg.com/736x/e3/0e/94/e30e94e1b33eb88b6ab807050ad7ff2f.jpg'
            },
            {id: v1(), name: "Dima", link: "4", avatar: 'https://crosti.ru/patterns/00/18/72/5109ae65df/picture.jpg'},
        ],
        message: '',
        usersMessages: [
            {id: v1(), sms: "Hi",},
            {id: v1(), sms: "How is your",},
            {id: v1(), sms: "Eeeee",},
            {id: v1(), sms: "Cool",},
        ]
    },
    //=============PostData /MyProfile/====================================
    proFilePage: {
        message: "",
        postData: [
            {id: v1(), sms: "Ha, how are you?", like: 15,},
            {id: v1(), sms: "It's my first post", like: 43,},
        ],

    },
    //=========Friends======================================================
    sidebar: {
        friends: [
            {
                id: v1(),
                name: "Denis",
                avatar: "https://i.pinimg.com/originals/56/7a/4c/567a4cc9870f8d8e3d03362732760e2c.jpg",
            },
            {
                id: v1(),
                name: "Diana",
                avatar: 'https://oir.mobi/uploads/posts/2021-05/1621874225_1-oir_mobi-p-krasivie-milie-kroliki-zhivotnie-krasivo-f-1.jpg'
            },
            {
                id: v1(),
                name: "Lolita",
                avatar: 'https://png.pngtree.com/element_our/20200703/ourlarge/pngtree-q-version-cute-cartoon-cute-little-animals-zodiac-signs-pig-image_2298838.jpg'
            },
        ]
    }
}
//Добавление нового поста кнопка=================================================
export const addPost = (/*postMessage: string*/) => {//postMessage - берем это напрямую из state
    // const newPost: postDataType ={id: v1(), sms: postMessage, like: 0,};//МОжно через переменную, протипизировав ее указав postDataType
    // state.proFilePage.postData.push(newPost);
    state.proFilePage.postData.push({id: v1(), sms: /*postMessage*/ state.proFilePage.message, like: 0,});
    state.proFilePage.message = '';//зачищаем строку здесь
    rerenderEntireTree(state);
}
//Добавление нового поста для change=================================================
export const addPostChange = (postMessage: string) => {
    state.proFilePage.message = postMessage;//message = переменной newTextPost, в которую будем сам и вписывать знаечния(контралируемая)
    rerenderEntireTree(state);
}
//=====================================================================

//add new message users=============================================
export const addMessageUsers = () => {
    state.messagesPage.usersMessages.push({id: v1(), sms: state.messagesPage.message,});
    state.messagesPage.message = '';
    rerenderEntireTree(state);
}
//add Для Change==========
export const addMessageUsersChange = (newMessageUsers: string) => {
    state.messagesPage.message = newMessageUsers;
    rerenderEntireTree(state);
}
//=================================================================

//render =========================================================
export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}
// ========================================================================
