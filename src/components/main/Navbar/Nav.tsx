import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

export const Nav =()=>{

    return(
        <aside className={s.nav}>
            <nav className={s.item}>
                <ul>
                    <li><NavLink to="/content" className={({isActive})=> isActive ? s.activeLink : undefined}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" className={({isActive})=> isActive ? s.activeLink : undefined}>Messages</NavLink></li>
                    <li><NavLink to="/news" className={({isActive})=> isActive ? s.activeLink : undefined}>News</NavLink></li>
                    <li><NavLink to="/music" className={({isActive})=> isActive ? s.activeLink : undefined}>Music</NavLink></li>
                    <br/>
                    <li><NavLink to="/settings" className={({isActive})=> isActive ? s.activeLink : undefined}>Settings</NavLink></li>
                </ul>
            </nav>
        </aside>
    );
}