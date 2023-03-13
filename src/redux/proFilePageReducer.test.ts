import {
    addPostAC,
    addPostChangeAC,
    proFilePageType,
    proFileReducer,
    ProfileUserType,
    setStatusAC
} from "./proFilePageReducer";
import {v1} from "uuid";

let proFilePage: proFilePageType;
beforeEach(() => {
    proFilePage = {
        message: "",
        postData: [
            {id: v1(), sms: "Ha, how are you?", like: 15,},
            {id: v1(), sms: "It's my first post", like: 43,},
        ],
        profile: {} as ProfileUserType,
        status:''
    }
});

test('add Post', () => {

    const newProFilePage = proFileReducer(proFilePage, addPostAC('my post'));
    let keys = Object.keys(proFilePage);

    expect(newProFilePage.postData[0].sms).toBe('my post');
    expect(newProFilePage.postData.length).toBe(3);
    expect(keys.length).toBe(4);
    expect(keys[0] !== keys[1]).toBe(true);
})

test('add Post Change', () => {
    const newProFilePage = proFileReducer(proFilePage, addPostChangeAC('my post'));

    expect(newProFilePage.message).toBe('my post');
})

test('set status', () => {
    const newProFilePage = proFileReducer(proFilePage, setStatusAC('Maloy'));

    expect(newProFilePage.status).toBe('Maloy');
})
// test('set User Profile', () => {
//     const newProFilePage = proFileReducer(proFilePage, setUserProfileAC(ProfileUserType));
//
//     expect(newProFilePage.message).toBe('my post');
// })