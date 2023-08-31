import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import s from 'common/components/formTextArea/FormTextArea.module.css'
import {usersMessagesType} from "features/redux/messagesPageReducer";

type FormTextareaType = {
    messages: usersMessagesType[],
    addMessages: (newMessageUsers: string) => void,
}
export const FormTextarea = (props: FormTextareaType) => {

    const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<FormTextareaType>();

    const onSubmit: SubmitHandler<FormTextareaType> = data => {
        console.log(data);
        props.addMessages(String(watch('messages')));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
                {...register('messages', {required: 'Поле пустое'})}
                placeholder={errors.messages ? errors.messages?.message : 'Введите сообщение'}
                className={errors.messages ? s.error : s.noError}
            />
            <br/>
            <button>send</button>
        </form>
    );
};




