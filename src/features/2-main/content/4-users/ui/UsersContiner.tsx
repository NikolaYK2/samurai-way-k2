import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {Users} from "features/2-main/content/4-users/ui/Users";
import {UsersType} from "common/api/api";
import {
    Expectation,
    followThunkCreator,
    getUsersThunkCreator,
    pageChangeThunkCreator,
    setUsersAC,
    toggleExpectationAC,
    unFollowThunkCreator
} from "features/2-main/content/4-users/model/usersReducers";
import {AppStateType} from "app/model/redux-store";
import {
    getCurrentPageSelect,
    getExpectationSelect,
    getLoadingPageSelect,
    getPageSizeSelect,
    getTotalUsersCountSelect,
    getUsersSelector
} from "features/2-main/content/4-users/model/usersSelectors";

//Контейнерная class компонента которая делает API
class UsersAPIComponent extends React.Component<UsersTypeProps> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsersThunk(currentPage, pageSize);
    }

    pageChange = (page: number) => {//меняем страницы
        const {pageSize} = this.props
        this.props.pageChangeThunk(page, pageSize);

    }

    render = () => {

        return (
            <div>
                <Users
                    expectation={this.props.expectation}

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
        // 4-users: getUsers(state),
        //FN SELECTOR ------
        users: getUsersSelector(state),
        // -----------------
        pageSize: getPageSizeSelect(state),
        totalUsersCount: getTotalUsersCountSelect(state),
        currentPage: getCurrentPageSelect(state),
        loadingPage: getLoadingPageSelect(state),
        expectation: getExpectationSelect(state),
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