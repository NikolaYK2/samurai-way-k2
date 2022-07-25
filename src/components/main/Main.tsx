import React from "react";
import {Nav} from "./Navbar/Nav";
import s from "./Main.module.css";
import {DialogsMessage} from "./content/dialogs/DialogsMessage";
import {ContentProfile} from "./content/ContentProfile";
import {Route,  Routes, } from "react-router-dom";
import {Music} from "./content/music/Music";
import {News} from "./content/news/News";
import {Settings} from "./content/settings/Settings";


export const Main = () => {

    return (
        <main className={s.main}>
            <Nav/>
            <Routes>
                <Route path="/content" element={<ContentProfile/>}/>
                <Route path="/dialogs/*" element={<DialogsMessage/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </main>
    );
}