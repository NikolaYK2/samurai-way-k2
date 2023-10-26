import {v1} from "uuid";
import {addMessageUsersAC, messagesPageReducer, messagesPageType} from "features/2-main/content/2-dialogs/model/messagesPageReducer";

let messagesPage: messagesPageType;
beforeEach(() => {

    messagesPage = {
        users: [],
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