import React, {memo, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import s from 'common/components/formTextArea/FormTextArea.module.css'
import {usersMessagesType} from "features/2-main/content/2-dialogs/model/messagesPageReducer";
import {Button} from "common/components/button/Button";
import {FileDownload} from "common/components/fileDownloud/fileDownload";
import {addPostAC, postDataType} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {useAppDispatch} from "app/model/redux-store";

type FormTextareaType = {
  nameBut?: string
  messages: usersMessagesType[],
  addMessages: (newMessageUsers: string) => void,
}
export const FormTextarea = memo((props: FormTextareaType) => {
  const [value, setValue] = useState('')

  const dispatch = useAppDispatch();

  const {register, handleSubmit, formState: {errors}, reset} = useForm<postDataType>({
    defaultValues: {
      sms: '',
    }
  });

  const onSubmit: SubmitHandler<postDataType> = data => {
    console.log(data)
    const {sms} = data
    dispatch(addPostAC(sms, value))
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${s.form}`}>
            <textarea
              {...register('sms', {required: 'Поле пустое'})}
              placeholder={errors.sms ? errors.sms.message : 'Введите сообщение'}
              className={`${errors.sms ? s.error : s.offError} customScroll`}
            />
      <FileDownload name={'changeBc'} register={register('postImg')} callback={setValue}/>
      <Button name={props.nameBut!} disabled={false}/>
    </form>
  );
});




