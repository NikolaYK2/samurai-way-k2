import React from "react";
import s from "./DialogsMessage.module.css";
import {NavLink} from "react-router-dom";


export const DialogsMessage = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__users}>
                Dialogs
                <div><NavLink to="/dialogs/1" className={s.active}>Nik</NavLink></div>
                <div><NavLink to="/dialogs/2">Vita</NavLink></div>
                <div><NavLink to="/dialogs/3">Vova</NavLink></div>
                <div><NavLink to="/dialogs/4">Dima</NavLink></div>
            </div>
            <div className={s.dialogs__messages}>
                Messages
                <div>Hi</div>
                <div>How is your</div>
                <div>Eeeee</div>
                <div>Cool</div>
            </div>
        </div>
    );
}