import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {store} from "../../../redux/redux-store";

type NavType={
    // store: StoreType,
}

export const Nav =(props: NavType)=>{

    return(
        <aside className={s.nav}>
            <nav className={s.item}>
                <ul>
                    <li><NavLink to="/profile" className={({isActive})=> isActive ? s.activeLink : ''}>Profile</NavLink></li>
                    <li><NavLink to="/messages" className={({isActive})=> isActive ? s.activeLink : ''}>Messages</NavLink></li>
                    <li><NavLink to="/users" className={({isActive})=> isActive ? s.activeLink : ''}>Users</NavLink></li>
                    <li><NavLink to="/news" className={({isActive})=> isActive ? s.activeLink : ''}>News</NavLink></li>
                    <li><NavLink to="/music" className={({isActive})=> isActive ? s.activeLink : ''}>Music</NavLink></li>
                    <br/>
                    <li><NavLink to="/settings" className={({isActive})=> isActive ? s.activeLink : ''}>Settings</NavLink></li>
                    <li><NavLink to="/friends" className={({isActive})=> isActive ? s.activeLink : ''}>Friends</NavLink>
                            {store.getState().sidebar.friends.map(f=>{
                                return(
                                <div className={s.item__friends} key={f.id}>
                                <div>
                                <img src={f.avatar} alt=""/>
                                </div>
                                <p>{f.name}</p>
                                </div>
                                )})}
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
