import React from "react";
import s from "./Nav.module.css";

export const Nav =()=>{
    return(
        <aside className={s.nav}>
            <nav className={s.item}>
                <ul>
                    <li className={s.item_active}><a>Profile</a></li>
                    <li><a>Messages</a></li>
                    <li><a>News</a></li>
                    <li><a>Music</a></li>
                    <br/>
                    <li><a>Settings</a></li>
                </ul>
            </nav>
        </aside>

    );
}