import React from 'react';
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {addMessageUsersAC, usersMessagesType} from "features/redux/messagesPageReducer";
import {AppStateType} from "app/redux-store";
import {RedirectContainer} from "common/hoc/RedirectContainer";
import {MessageUsers} from "features/2-main/content/dialogs/messageUsers/MessageUsers";


type MapStatePropsType = {
    usersMessages: usersMessagesType[],
    isAuth?: boolean,
}

type MapDispatchPropsType = {
    addMessageUsers: (newMessageUsers: string) => void,
}

export type MessageUsersType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersMessages: state.messagesPage.usersMessages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessageUsers: (newMessageUsers: string) => {
            dispatch(addMessageUsersAC(newMessageUsers));
        },
    }
}

//RedirectContaienr =========================================================
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), RedirectContainer//затем возьми результат и закинь в connect
)(MessageUsers);//FN compose автомтаически закинет MessageUsers в RedirectContainer


