import React, {memo} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import s from 'common/components/formTextArea/FormTextArea.module.css'
import {usersMessagesType} from "features/2-main/content/2-dialogs/model/messagesPageReducer";
import {Button} from "common/components/button/Button";
import {FileDownload} from "common/components/fileDownloud/fileDownload";
import {changeBackgroundAC} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";

type FormTextareaType = {
  nameBut?: string
  messages: usersMessagesType[],
  addMessages: (newMessageUsers: string) => void,
}
export const FormTextarea = memo((props: FormTextareaType) => {

  const {register, handleSubmit, watch, formState: {errors}, reset} = useForm<FormTextareaType>();

  const onSubmit: SubmitHandler<FormTextareaType> = data => {
    console.log(data)
    props.addMessages(String(watch('messages')));
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${s.form}`}>
            <textarea
              {...register('messages', {required: 'Поле пустое'})}
              placeholder={errors.messages ? errors.messages.message : 'Введите сообщение'}
              className={`${errors.messages ? s.error : s.offError} customScroll`}
            />
      <FileDownload name={'changeBc'} callbackString={changeBackgroundAC}/>
      <Button name={props.nameBut!} disabled={false}/>
    </form>
  );
});




