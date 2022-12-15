import React from 'react';
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
// import {Users} from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, UsersType} from "../../../../redux/usersReducers";
// import {Users} from "./Users";
import {Users} from "./UsersС";


export type MapStatePropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

export type MapDispatchPropsType = {
    follow: (userId: string) => void,//если в функции есть return например 10(числа), то уже не void пишется а number(state и т.д.)
    unFollow: (userId: string) => void,
    setUsers: (users: UsersType[]) => void,
    setCurrentPage: (page: number) => void,
}

export type UsersTypeProps = MapStatePropsType & MapDispatchPropsType;


const mapStateToProps = (state: AppStateType): MapStatePropsType => {//название функции обозначает замапить state на пропсы
    return {
        //getState мы уже не делаем
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => (dispatch(followAC(userId))),
        unFollow: (userId: string) => (dispatch(unFollowAC(userId))),
        setUsers: (users: UsersType[]) => (dispatch(setUsersAC(users))),
        setCurrentPage: (page: number) => (dispatch(setCurrentPageAC(page))),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);