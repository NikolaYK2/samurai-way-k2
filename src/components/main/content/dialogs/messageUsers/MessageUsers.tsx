import React, {ChangeEvent, useState} from 'react';
import s from "./MessageUsers.module.css";
import {MessageUsersType} from "./MessageUsersContainer";
import {Navigate} from "react-router-dom";

// type MessageUsersType = {
//     // store: StoreType,
//     message: string,
//     usersMessages: usersMessagesType[],
//     // dispatch:(action: ActionsTypeMessagesUsers)=>void,
//     addMessageUsers:()=>void,
//     addMessageUsersChange:(event: ChangeEvent<HTMLTextAreaElement>)=>void,
//
// }

export const MessageUsers = (props: MessageUsersType) => {
    let [errorText, setErrorText] = useState<string | null>(null)

    const addMessages = () => {
        if (props.message !== "") {
            props.addMessageUsers(props.message);
            // props.dispatch(addMessageUsersAC(props.message));
        } else {
            setErrorText('Але, пиши чееее!')
        }
    }
    const addMessagesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(addMessageUsersChangeAC(event));
        let text = event.currentTarget.value
        props.addMessageUsersChange(text);
        setErrorText('')
    }

    //Делаем Redirect =======================
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!props.isAuth) {
    //         navigate('/login')
    //     } else {
    //         navigate('/messages')
    //     }
    // }, [navigate, props.isAuth])
    if (!props.isAuth) {
        return <Navigate to='/login'/>
    }

    return (
        <div className={s.dialogs__messages}>
            Messages
            {props.usersMessages.map(uM => {
                return (
                    <div key={uM.id} className={s.dialogs__users}>
                        <div>{uM.sms}</div>
                    </div>
                )
            })}
            <textarea placeholder={errorText || 'Введите сообщение'} onChange={addMessagesChange}
                      value={props.message}></textarea>
            <br/>
            <button onClick={addMessages}>send</button>
        </div>
    );
};

