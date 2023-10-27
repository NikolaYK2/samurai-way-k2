import {v1} from "uuid";

const addMessageUsers = 'addMessageUsers';

export type ActionsTypeMessagesUsers = ReturnType<typeof addMessageUsersAC>

export const addMessageUsersAC = (newMessageUsers: string) => ({type: 'addMessageUsers', newMessageUsers,} as const)

export type usersType = {
    id: string,
    name: string,
    photo: string,
}

export type usersMessagesType = {
    id: string,
    sms: string,
}

export type  messagesPageType = {
    users: usersType[],
    usersMessages: usersMessagesType[],
}

const initializationState: messagesPageType = {
    users: [
        // {
        //     id: v1(),
        //     name: "Nik",
        //     link: "1",
        //     avatar: 'https://avatars.mds.yandex.net/get-ott/223007/2a0000016928ac39a6e32ce5657d59f31eb4/1344x756',
        // },
        // {
        //     id: v1(),
        //     name: "Vita",
        //     link: "2",
        //     avatar: "https://w7.pngwing.com/pngs/991/871/png-transparent-red-heart-illustration-heart-dark-red-heart-hd-love-image-file-formats-heart.png"
        // },
        // {
        //     id: v1(),
        //     name: "Vova",
        //     link: "3",
        //     avatar: 'https://i.pinimg.com/736x/e3/0e/94/e30e94e1b33eb88b6ab807050ad7ff2f.jpg'
        // },
        // {
        //     id: v1(),
        //     name: "Dima",
        //     link: "4",
        //     avatar: 'https://crosti.ru/patterns/00/18/72/5109ae65df/picture.jpg'
        // },
    ],

    usersMessages: [
        {id: v1(), sms: "Hi",},
        {id: v1(), sms: "How is your",},
        {id: v1(), sms: "Eeeee",},
        {id: v1(), sms: "Cool",},
    ],
}

export const messagesPageReducer = (state = initializationState, action: ActionsTypeMessagesUsers):messagesPageType => {
    switch (action.type) {
        case addMessageUsers:
            return {...state, usersMessages:[...state.usersMessages, {id: v1(), sms:action.newMessageUsers}]};
        default:
            return state;
    }
}

