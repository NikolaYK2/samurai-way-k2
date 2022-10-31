import React from 'react';
import {AppStateType} from "../../../../../redux/redux-store";
import {
    addMessageUsersAC,
    addMessageUsersChangeAC,
    usersMessagesType
} from "../../../../../redux/messagesPageReducer";
import {MessageUsers} from "./MessageUsers";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// type MessageUsersType = {
//     // store: StoreType,
//     // addMessageUsers:()=>void,
//     // addMessageUsersChange:(newMessageUsers: string)=>void,
//     // message: string,
//     // dispatch:(action: ActionsTypeMessagesUsers)=>void,
// }
//
// export const MessageUsersContainer = (props: MessageUsersType) => {
//
//     // const message = props.store.getState().messagesPage.message
//     // const usersMessages = props.store.getState().messagesPage.usersMessages
//     //
//     // const addMessages = () => {
//     //         props.store.dispatch(addMessageUsersAC(props.store.getState().messagesPage.message));
//     // }
//     // const addMessagesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     //     props.store.dispatch(addMessageUsersChangeAC(event));
//     // }
//
//                 const message = /*props.*/store.getState().messagesPage.message
//                 const usersMessages = /*props.*/store.getState().messagesPage.usersMessages
//
//                 const addMessages = () => {
//                     /*props.*/store.dispatch(addMessageUsersAC(/*props.*/store.getState().messagesPage.message));
//                 }
//                 const addMessagesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//                     /*props.*/store.dispatch(addMessageUsersChangeAC(event));
//                 }
//
//                 return(
//                     <MessageUsers message={message}
//                                   usersMessages={usersMessages}
//                                   addMessageUsers={addMessages}
//                                   addMessageUsersChange={addMessagesChange}/>
//                 );
//     );
// };


type MapStatePropsType = {
    message: string,
    usersMessages: usersMessagesType[],
}

type MapDispatchPropsType = {
    addMessageUsers:(newMessageUsers: string)=>void,
    addMessageUsersChange:(text: string)=>void,
}

export type MessageUsersType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        message: state.messagesPage.message,
        usersMessages: state.messagesPage.usersMessages,
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addMessageUsers: (newMessageUsers: string) => {
            dispatch(addMessageUsersAC(newMessageUsers));
        },
        addMessageUsersChange: (text: string) => {
            dispatch(addMessageUsersChangeAC(text));
        },
    }
}

export const MessageUsersContainer = connect(mapStateToProps, mapDispatchToProps)(MessageUsers);

