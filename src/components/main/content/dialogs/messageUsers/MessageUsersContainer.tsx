import React, {ChangeEvent} from 'react';
import {AppStateType} from "../../../../../redux/redux-store";
import {addMessageUsersAC, addMessageUsersChangeAC} from "../../../../../redux/messagesPageReducer";
import {MessageUsers} from "./MessageUsers";
import {StoreContext} from "../../../../../StoreContext";

type MessageUsersType = {
    // store: StoreType,
    // addMessageUsers:()=>void,
    // addMessageUsersChange:(newMessageUsers: string)=>void,
    // message: string,
    // dispatch:(action: ActionsTypeMessagesUsers)=>void,
}

export const MessageUsersContainer = (props: MessageUsersType) => {

    // const message = props.store.getState().messagesPage.message
    // const usersMessages = props.store.getState().messagesPage.usersMessages
    //
    // const addMessages = () => {
    //         props.store.dispatch(addMessageUsersAC(props.store.getState().messagesPage.message));
    // }
    // const addMessagesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.store.dispatch(addMessageUsersChangeAC(event));
    // }

    return (
        <StoreContext.Consumer>
            {(store)=>{
                const message = /*props.*/store.getState().messagesPage.message
                const usersMessages = /*props.*/store.getState().messagesPage.usersMessages

                const addMessages = () => {
                    /*props.*/store.dispatch(addMessageUsersAC(/*props.*/store.getState().messagesPage.message));
                }
                const addMessagesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
                    /*props.*/store.dispatch(addMessageUsersChangeAC(event));
                }

                return(
                    <MessageUsers message={message}
                                  usersMessages={usersMessages}
                                  addMessageUsers={addMessages}
                                  addMessageUsersChange={addMessagesChange}/>
                );
            }}
        </StoreContext.Consumer>
    );
};

