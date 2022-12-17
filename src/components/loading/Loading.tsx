import React from 'react';
import loadingIcon from "./Swing-Preloader.svg";
import s from './Loading.module.css';

export const Loading = () => {
    return (
        <div className={s.containerLoading}>
            <img src={loadingIcon} alt=""/>
        </div>
    );
};

