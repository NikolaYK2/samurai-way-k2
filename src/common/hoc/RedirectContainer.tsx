import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "app/redux-store";


type MapStatePropsType ={
    isAuth:boolean,
}
const mapStateToPropsRedirect = (state: AppStateType):MapStatePropsType => {
    return {
        isAuth: state.loginAuthorization.isAuth,
    }
}

export function RedirectContainer<T>(Component: ComponentType<T>) {//COmponentType из реакта импортируем

    const RedirectComponent=(props: MapStatePropsType)=> {
        //isAuth нам не нужно кидать в компоненту, он нужен тут, нужно отделаить от props c помощью деструктизации
        const{isAuth, ...restProps} = props;//Вытягиваем из props isAuth, а все остальное засовывваем в restProps

        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>//as - воспринимай его как - T -
    }

    let ConnectedRedirectComponentContainer = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedRedirectComponentContainer;
}

