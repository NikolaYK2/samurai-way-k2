import React from 'react';
import {connect} from "react-redux";
import {Loading} from "common/components/loading/Loading";
import {compose} from "redux";
import {Users} from "features/2-main/content/users/Users";
import {UsersType} from "common/api/api";
import {
    Expectation, followThunkCreator,
    getUsersThunkCreator,
    pageChangeThunkCreator,
    setUsersAC,
    toggleExpectationAC, unFollowThunkCreator
} from "features/redux/usersReducers";
import {AppStateType} from "app/redux-store";
import {
    getCurrentPage, getExpectation,
    getLoadingPage,
    getPageSize,
    getTotalUsersCount,
    getUserSelector
} from "features/redux/usersSelectors";

//Контейнерная class компонента которая делает API
class UsersAPIComponent extends React.Component<UsersTypeProps> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    pageChange = (page: number) => {//меняем страницы
        this.props.pageChangeThunk(page, this.props.pageSize);

    }

    render = () => {//Единственный метод, который вы должны определить в React.Componentподклассе, называется render()
        //теперь и кнопке мы передаем на onClick не переменную а метод через this.getUsers

        return (
            <div>
                {this.props.loadingPage && <Loading/>}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    expectation={this.props.expectation}

                    pageChange={this.pageChange}
                    setUsers={this.props.setUsers}
                    unFollowThunk={this.props.unFollowThunk}
                    followThunk={this.props.followThunk}
                />
            </div>

        );
    }
}


export type UsersTypeProps = MapStatePropsType & MapDispatchPropsType;

export type MapStatePropsType = {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    loadingPage: boolean,
    expectation: (Expectation | string)[],
}

export type MapDispatchPropsType = {
    setUsers: (users: UsersType[]) => void,
    toggleExpectation: (userId: string, onOff: boolean) => void,
    getUsersThunk: (currentPage: number, pageSize: number) => void,
    pageChangeThunk: (page: number, pageSize: number) => void,
    unFollowThunk: (userId: string) => void,//если в функции есть return например 10(числа), то уже не void пишется а number(state и т.д.)
    followThunk: (userId: string) => void,
}

//MAP STATE SELECTORS =======================================
const mapStateToProps = (state: AppStateType): MapStatePropsType => {//название функции обозначает замапить state на пропсы
    return {
        //getState мы уже не делаем
        // users: getUsers(state),
        //FN SELECTOR ------
        users: getUserSelector(state),
        // -----------------
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        loadingPage: getLoadingPage(state),
        expectation: getExpectation(state),
    }
}
//======================================================
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers: setUsersAC,
        toggleExpectation: toggleExpectationAC,
        getUsersThunk: getUsersThunkCreator,
        pageChangeThunk: pageChangeThunkCreator,
        unFollowThunk: unFollowThunkCreator,
        followThunk: followThunkCreator,
    }),
)(UsersAPIComponent);