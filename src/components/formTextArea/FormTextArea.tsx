import {usersMessagesType} from "../../redux/messagesPageReducer";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import s from './FormTextArea.module.css'

type FormTextareaType = {
    messages: usersMessagesType[],
    addMessages: (newMessageUsers: string) => void,
}
export const FormTextarea = (props: FormTextareaType) => {
    // const {addMessages} = props;

    // const [errorText, setErrorText] = useState<string | null>(null);
    // const [styleError, setStyleError] = useState<string>('');
    // const [message, setMessage] = useState('');

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormTextareaType>();

    // const writeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     setMessage(e.currentTarget.value);
    //     setStyleError(s.noError);
    //     setErrorText('');
    // }

    const onSubmit: SubmitHandler<FormTextareaType> = data => {
        console.log(data)
        reset();
        // if (message !== '') {
        //     addMessages(message);//message - можно не получать этот текст, оно и так сидит в state
        //     console.log(data)
        //     setMessage('');
        // } else {
        //     setErrorText('Поле не заполнено');
        //     setStyleError(s.error)
        // }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
                {...register('messages', {required: 'Поле пустое'})}
                placeholder={errors.messages ? errors.messages?.message : 'Введите сообщение'}
                className={errors.messages ? s.error : s.noError}
                // placeholder={errorText || 'Введите сообщение'}
                // value={message}
                // onChange={writeMessage}
            />
            {/*<p>{errors.messages?.message}</p>*/}
            {/*<TextArea*/}
            {/*          // errorText={errorText}*/}
            {/*          writeMessage={writeMessage}*/}
            {/*          message={message}*/}
            {/*          title={'add message'}*/}
            {/*          errors={errors}*/}
            {/*          typeRegister={props.usersMessages}*/}
            {/*          register={register}*/}
            {/*/>*/}
            <br/>
            <button>send</button>
        </form>
    );
};




