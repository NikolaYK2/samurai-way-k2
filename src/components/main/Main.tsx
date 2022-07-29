import React from "react";
import {Nav} from "./Navbar/Nav";
import s from "./Main.module.css";
import {DialogsMessage} from "./content/dialogs/DialogsMessage";
import {ContentProfile} from "./content/ContentProfile";
import {Route,  Routes, } from "react-router-dom";
import {Music} from "./content/music/Music";
import {News} from "./content/news/News";
import {Settings} from "./content/settings/Settings";
import {stateType} from "../redux/state";
import {Friends} from "./content/friends/Friends";

type MainType={
    state:stateType
}

export const Main = (props: MainType) => {

    return (
        <main className={s.main}>
            <Nav state={props.state}/>
            <Routes>
                <Route path="/content" element={<ContentProfile state={props.state}/>}/>
                <Route path="/dialogs/*" element={<DialogsMessage state={props.state} />}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/friends" element={<Friends/>}/>
            </Routes>
        </main>
    );
}