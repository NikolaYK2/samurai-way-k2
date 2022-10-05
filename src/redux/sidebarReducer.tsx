import {v1} from "uuid";

export type friendsType = {
    id: string,
    name: string,
    avatar: string,
}

export type sidebarType = {
    friends: friendsType[],
}

let initializationState: sidebarType = {
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

export const sidebarReducer = (state = initializationState, action: any) => {
    return state;
};