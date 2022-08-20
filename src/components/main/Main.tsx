import React from "react";
import {Nav} from "./Navbar/Nav";
import s from "./Main.module.css";
import {DialogsMessage} from "./content/dialogs/DialogsMessage";
import {ContentProfile} from "./content/ContentProfile";
import {Route,  Routes, } from "react-router-dom";
import {Music} from "./content/music/Music";
import {News} from "./content/news/News";
import {Settings} from "./content/settings/Settings";
import {StoreType} from "../redux/state";
import {Friends} from "./content/friends/Friends";

type MainType={
    store: StoreType,
    // addPost:()=>void,
    // addPostChange:(newTextPost: string)=>void,
    // addMessageUsers:()=>void
    // addMessageUsersChange:(newMessageUsers: string)=>void,
    // proFilePage: proFilePageType,
    // messagesPage: messagesPageType,
}

export const Main = (props: MainType) => {

    return (
        <main className={s.main}>
            <Nav store={props.store}/>
            <Routes>
                <Route path="/content" element={<ContentProfile
                    store={props.store}
                    // addPost={props.addPost}//Добавление сообщения для моего поста
                    // proFilePage={props.proFilePage}/*передаем значения для textarea value*/
                    // addPostChange={props.addPostChange}
                />}/>
                <Route path="/dialogs/*" element={<DialogsMessage
                    store={props.store}
                    // messagesPage={props.messagesPage}
                    // addMessageUsers={props.addMessageUsers}
                    // addMessageUsersChange={props.addMessageUsersChange}
                />}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/friends" element={<Friends/>}/>
            </Routes>
        </main>
    );
}