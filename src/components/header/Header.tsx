import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {ProfileTypeProps} from "./HeaderContainer";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {logoutThunkC} from "../../redux/loginReducer";

export const Header = (props: ProfileTypeProps) => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector<boolean>(state => state.loginAuthorization.isAuth)

    const deleteHandl = () => {
        dispatch(logoutThunkC());
    }
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={deleteHandl} disabled={!isAuth}>log out</button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}