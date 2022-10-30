import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {AppStateType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";

type NavType={
    // store: StoreType,
}

export const Nav =(props: NavType)=>{

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
                    <li><NavLink to="/friends" className={({isActive})=> isActive ? s.activeLink : undefined}>Friends</NavLink>
                        <StoreContext.Consumer>
                            {(store)=>(
                                <>
                            {/*props.*/store.getState().sidebar.friends.map(f=>{
                                return(
                                <div className={s.item__friends} key={f.id}>
                                <div>
                                <img src={f.avatar} alt=""/>
                                </div>
                                <p>{f.name}</p>
                                </div>
                                )})}
                                </>)}
                        </StoreContext.Consumer>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
