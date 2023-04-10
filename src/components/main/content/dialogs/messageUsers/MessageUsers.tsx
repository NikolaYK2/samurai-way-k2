import React, {ChangeEvent, useState} from 'react';
import s from "./MessageUsers.module.css";
import {MessageUsersType} from "./MessageUsersContainer";
import {SubmitHandler, useForm} from "react-hook-form";
import {usersMessagesType} from "../../../../../redux/messagesPageReducer";
import {formOnSubmit} from "../../../../../formOnSubmit/formOnSubmit";

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

    //Делаем Redirect =======================
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!props.isAuth) {
    //         navigate('/login')
    //     } else {
    //         navigate('/messages')
    //     }
    // }, [navigate, props.isAuth])
    // if (!props.isAuth) {
    //     return <Navigate to={'/login'}/>
    // }

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
            <FormTextarea usersMessages={props.usersMessages} addMessageUsers={props.addMessageUsers}/>
        </div>
    );
};
//--------------------------------------------------------------------------------------------





type FormTextareaType = {
    usersMessages: usersMessagesType[],
    addMessageUsers:(newMessageUsers: string)=>void,
}
export const FormTextarea = (props: FormTextareaType) => {
    const {addMessageUsers}=props;

    const [errorText, setErrorText] = useState<string | null>(null);

    const [message, setMessage] = useState('');

    const writeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
        setErrorText('');
    }

    const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<FormTextareaType>();

    // const isAuth = useAppSelector<boolean>((state) => state.loginAuthorization.isAuth)
    // const onSubmit: SubmitHandler<FormTextareaType> = data => {
    //     if (message !== "") {
    //         addMessageUsers(message);
    //         setMessage('');
    //         console.log(data);
    //     } else {
    //         setErrorText('Але, пиши чееее!');
    //     }
    //
    // }

    //FORM =================================================
    const onSubmit: SubmitHandler<MessageUsersType> = formOnSubmit(message, addMessageUsers, setMessage, setErrorText);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register('usersMessages')}
                      placeholder={errorText || 'Введите сообщение'}
                      value={message}
                      onChange={writeMessage}
            />
            <br/>
            <button>send</button>
        </form>
    );
};

