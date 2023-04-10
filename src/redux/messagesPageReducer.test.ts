import {addMessageUsersAC, messagesPageReducer, messagesPageType} from "./messagesPageReducer";
import {v1} from "uuid";

let messagesPage: messagesPageType;
beforeEach(() => {

    messagesPage = {
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
            {
                id: v1(),
                name: "Dima",
                link: "4",
                avatar: 'https://crosti.ru/patterns/00/18/72/5109ae65df/picture.jpg'
            },
        ],
        // message: '',
        usersMessages: [
            {id: v1(), sms: "Hi",},
            {id: v1(), sms: "How is your",},
            {id: v1(), sms: "Eeeee",},
            {id: v1(), sms: "Cool",},
        ],
    };
})

test('add Message Users', () => {
    const newMessagesPage = messagesPageReducer(messagesPage, addMessageUsersAC('hi'));
    expect(newMessagesPage.usersMessages[4].sms).toBe('hi');
    expect(newMessagesPage.usersMessages.length).toBe(5);
});

test('add Message Users Change', () => {
    const newMessagesPage = messagesPageReducer(messagesPage, addMessageUsersAC('I am Nok'));
    expect(newMessagesPage.usersMessages[newMessagesPage.usersMessages.length-1].sms).toBe('I am Nok');
});