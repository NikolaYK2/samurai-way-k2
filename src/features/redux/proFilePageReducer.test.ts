import {
    addPostAC, deletePostAC,
    proFilePageType,
    proFileReducer,
    ProfileUserType,
    setStatusAC
} from "features/redux/proFilePageReducer";

let proFilePage: proFilePageType;
beforeEach(() => {
    proFilePage = {
        postData: [
            {id: '1', sms: "Ha, how are you?", like: 15,},
            {id: '2', sms: "It's my first post", like: 43,},
        ],
        profile: {} as ProfileUserType,
        status:''
    }
});

test('add Post', () => {

    const newProFilePage = proFileReducer(proFilePage, addPostAC('my post'));
    let keys = Object.keys(proFilePage);

    expect(newProFilePage.postData[0].sms).toBe('my post');
    expect(newProFilePage.postData[0].like).toBe(0);
    expect(newProFilePage.postData.length).toBe(3);
    expect(keys.length).toBe(3);
    expect(keys[0] !== keys[1]).toBe(true);
})

test('set status', () => {
    const newProFilePage = proFileReducer(proFilePage, setStatusAC('Maloy'));

    expect(newProFilePage.status).toBe('Maloy');
})

test('delete post', () => {
    const newProFilePage = proFileReducer(proFilePage, deletePostAC('1'));

    expect(newProFilePage.postData.length).toBe(1);
    expect(newProFilePage.postData[0].sms).toBe("It's my first post");
})

// test('set User Profile', () => {
//     const newProFilePage = proFileReducer(proFilePage, setUserProfileAC(ProfileUserType));
//
//     expect(newProFilePage.message).toBe('my post');
// })