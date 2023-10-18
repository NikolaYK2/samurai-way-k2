import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {UpdProfileType} from "features/2-main/content/1-MyProfile/api/profileApi";
import {useAppSelector} from "app/redux-store";
import s from './ProfileUpdateInfo.module.css'

export const ProfileUpdateInfo = () => {
  const myId = useAppSelector(state => state.loginAuthorization.id)
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<UpdProfileType>({
    defaultValues:{
      userId: myId || undefined,
      lookingForAJob: false,
      lookingForAJobDescription: '',
      fullName: '',
      contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: null,
        youtube: null,
        mainLink: null,
      }
    }
  })

  const onSubmit: SubmitHandler<UpdProfileType> = data => {

  }

  return (
    <div className={s.container}>

    </div>
  );
};

