import React from "react";
import s from "./Main.module.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {Nav} from "features/2-main/Navbar/Nav";
import {News} from "features/2-main/content/news/News";
import {Music} from "features/2-main/content/music/Music";
import {Settings} from "features/2-main/content/settings/Settings";
import {FriendsContainer} from "features/2-main/content/friends/FriendsContainer";
import {Login} from "common/components/login/Login";
import {DialogsMessage} from "features/2-main/content/dialogs/DialogsMessage";
import ProfileContainer from "features/2-main/content/ContentProfileContainer";
import UsersContainer from "features/2-main/content/users/UsersContiner";


export const Main = () => {
    return (
        <main className={s.main}>
            <Nav/>
            <Routes>
                <Route path="/samurai-way-k2" element={<Navigate to="/profile" replace/>}/>
                <Route path='/profile' element={<ProfileContainer/>}>
                    <Route path=":userId" element={<ProfileContainer/>}/>
                </Route>
                <Route path="/messages/*" element={<DialogsMessage/>}/>
                <Route path="/users/*" element={<UsersContainer/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/friends" element={<FriendsContainer/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </main>
    );
}

