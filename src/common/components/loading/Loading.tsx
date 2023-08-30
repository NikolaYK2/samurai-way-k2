import React from 'react';
import loadingIcon from "common/components/loading/Swing-Preloader.svg";
import s from 'common/components/loading/Loading.module.css';

export const Loading = () => {
    return (
        <div className={s.containerLoading}>
            <img src={loadingIcon} alt=""/>
        </div>
    );
};

