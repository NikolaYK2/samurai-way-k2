import React from 'react';
import s from "./MessageUsers.module.css";
import {MessageUsersType} from "./MessageUsersContainer";
import {FormTextarea} from "../../../../formTextArea/FormTextArea";

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
            <FormTextarea messages={props.usersMessages} addMessages={props.addMessageUsers}/>
        </div>
    );
};
//--------------------------------------------------------------------------------------------





// type FormTextareaType = {
//     usersMessages: usersMessagesType[],
//     addMessageUsers:(newMessageUsers: string)=>void,
// }
// export const FormTextarea = (props: FormTextareaType) => {
//     const {addMessageUsers}=props;
//
//     const [errorText, setErrorText] = useState<string | null>(null);
//     const [styleError, setStyleError] = useState<string>('');
//     const [message, setMessage] = useState('');
//
//     const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<FormTextareaType>();
//
//     const writeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         setMessage(e.currentTarget.value);
//         setStyleError(s2.noError);
//         // setErrorText('');
//     }
//     // const isAuth = useAppSelector<boolean>((state) => state.loginAuthorization.isAuth)
//     // const onSubmit: SubmitHandler<FormTextareaType> = data => {
//     //     if (message !== "") {
//     //         addMessageUsers(message);
//     //         setMessage('');
//     //         console.log(data);
//     //     } else {
//     //         setErrorText('Але, пиши чееее!');
//     //     }
//     //
//     // }
//
//     //FORM =================================================
//     const onSubmit: SubmitHandler<MessageUsersType> = formOnSubmit(message, addMessageUsers, setMessage, setErrorText,setStyleError);
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <textarea {...register('usersMessages')}
//                       placeholder={errorText || 'Введите сообщение'}
//                       value={message}
//                       onChange={writeMessage}
//                       className={styleError}
//             />
//             {/*<TextArea*/}
//             {/*          // errorText={errorText}*/}
//             {/*          writeMessage={writeMessage}*/}
//             {/*          message={message}*/}
//             {/*          title={'add message'}*/}
//             {/*          errors={errors}*/}
//             {/*          typeRegister={props.usersMessages}*/}
//             {/*          register={register}*/}
//             {/*/>*/}
//             <br/>
//             <button>send</button>
//         </form>
//     );
// };

