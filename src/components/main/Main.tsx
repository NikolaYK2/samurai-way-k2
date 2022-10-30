import React from "react";
import {Nav} from "./Navbar/Nav";
import s from "./Main.module.css";
import {DialogsMessage} from "./content/dialogs/DialogsMessage";
import {ContentProfile} from "./content/ContentProfile";
import {Navigate, Route, Routes} from "react-router-dom";
import {Music} from "./content/music/Music";
import {News} from "./content/news/News";
import {Settings} from "./content/settings/Settings";
import {Friends} from "./content/friends/Friends";
import {AppStateType} from "../../redux/redux-store";

type MainType={
    // store: StoreType,
    // addPostChange:(newMessageUsers: any)=>void,
}

export const Main = (props: MainType) => {

    return (
        <main className={s.main}>
            <Nav /*store={props.store}*//>
            <Routes>
                <Route path='/' element={<Navigate to="/content"/>}/>

                <Route path="/content" element={<ContentProfile /*store={props.store}*/ /*addPostChange={props.addPostChange} *//>}/>
                <Route path="/dialogs/*" element={<DialogsMessage /*store={props.store}*//>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/friends" element={<Friends/>}/>
                <Route path="^" element={<div>404</div>}/>
            </Routes>
        </main>
    );
}