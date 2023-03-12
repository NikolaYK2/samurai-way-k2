import React from "react";
import {Nav} from "./Navbar/Nav";
import s from "./Main.module.css";
import {DialogsMessage} from "./content/dialogs/DialogsMessage";
import {Navigate, Route, Routes} from "react-router-dom";
import {Music} from "./content/music/Music";
import {News} from "./content/news/News";
import {Settings} from "./content/settings/Settings";
import {FriendsContainer} from "./content/friends/FriendsContainer";
import UsersContainer from "./content/users/UsersContiner";
import ProfileContainer from "./content/ContentProfileContainer";
import {Login} from "../login/Login";

// type MainType={
//     // store: StoreType,
//     // addPostChange:(newMessageUsers: any)=>void,
// }

export const Main = () => {
    return (
        <main className={s.main}>
            <Nav /*store={props.store}*//>
            <Routes>
                <Route path="*" element={<Navigate to="/profile"/>}/>
                <Route path='/profile' element={<ProfileContainer/>}>
                    <Route path=":userId" element={<ProfileContainer/>}/>
                </Route>
                <Route path="/messages/*" element={<DialogsMessage /*store={props.store}*//>}/>
                <Route path="/users/*" element={<UsersContainer/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/friends" element={<FriendsContainer/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="^" element={<div>404</div>}/>
            </Routes>
        </main>
    );
}

