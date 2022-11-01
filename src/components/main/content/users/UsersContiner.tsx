import React from 'react';
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../../../redux/usersReducers";


type MapStatePropsType = {
    users: UsersType[],
}

type MapDispatchPropsType = {
    follow: (userId: string) => void,//если в функции есть return например 10(числа), то уже не void пишется а number(state и т.д.)
    unFollow: (userId: string) => void,
    setUsers: (users: UsersType[]) => void,
}

export type UsersTypeProps = MapStatePropsType & MapDispatchPropsType;


const mapStateToProps = (state: AppStateType): MapStatePropsType => {//название функции обозначает замапить state на пропсы
    return {
        //getState мы уже не делаем
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => (dispatch(followAC(userId))),
        unFollow: (userId: string) => (dispatch(unFollowAC(userId))),
        setUsers: (users: UsersType[]) => (dispatch(setUsersAC(users))),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);