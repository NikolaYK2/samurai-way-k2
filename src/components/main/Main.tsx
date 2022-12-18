import React from "react";
import {Nav} from "./Navbar/Nav";
import s from "./Main.module.css";
import {DialogsMessage} from "./content/dialogs/DialogsMessage";
import {Navigate, Route, Routes} from "react-router-dom";
import {Music} from "./content/music/Music";
import {News} from "./content/news/News";
import {Settings} from "./content/settings/Settings";
import {Friends} from "./content/friends/Friends";
import {UsersContainer} from "./content/users/UsersContiner";
import {ProfileContainer} from "./content/ContentProfileContainer";

type MainType={
    // store: StoreType,
    // addPostChange:(newMessageUsers: any)=>void,
}

export const Main = (props: MainType) => {

    return (
        <main className={s.main}>
            <Nav /*store={props.store}*//>
            <Routes>
                <Route path='/' element={<Navigate to="/profile"/>}/>

                <Route path="/profile/*" element={<ProfileContainer /*store={props.store}*/ /*addPostChange={props.addPostChange} *//>}/>
                <Route path="/messages/*" element={<DialogsMessage /*store={props.store}*//>}/>
                <Route path="/users/*" element={<UsersContainer/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/friends" element={<Friends/>}/>
                <Route path="^" element={<div>404</div>}/>
            </Routes>
        </main>
    );
}