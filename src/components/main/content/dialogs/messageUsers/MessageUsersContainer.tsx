import React from 'react';
import {AppStateType} from "../../../../../redux/redux-store";
import {addMessageUsersAC, addMessageUsersChangeAC, usersMessagesType} from "../../../../../redux/messagesPageReducer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RedirectContainer} from "../../../../../hoc/RedirectContainer";
import {MessageUsers} from "./MessageUsers";

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
    isAuth?:boolean,
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
        // isAuth: state.loginAuthorization.isAuth,
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

//RedirectContaienr =========================================================
// const RedirectComponentContainer = RedirectContainer(MessageUsers);
// const RedirectComponentContainer =(props:MessageUsersType)=>{
//     if (!props.isAuth) {
//         return <Navigate to={'/login'} />
//     }
//
//     return <MessageUsers {...props}/>
// }
//RedirectContaienr =========================================================
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    RedirectContainer//затем возьми результат и закинь в connect
)(MessageUsers);//FN compose автомтаически закинет MessageUsers в RedirectContainer

// export const MessageUsersContainer = connect(mapStateToProps, mapDispatchToProps)(MessageUsers);
// export const MessageUsersContainer = RedirectContainer(connect(mapStateToProps, mapDispatchToProps)(MessageUsers));
// export const MessageUsersContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponentContainer);

