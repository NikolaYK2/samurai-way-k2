import React, {useState} from 'react';
import s from 'features/0-auth/login/Login.module.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppThunkDispatch, useAppSelector} from "app/redux-store";
import {authLoginThunkC} from "features/redux/authReducer";
import {loginSelector} from "features/0-auth/login/selectors";
import {IconSvg} from "common/components/iconSvg/IconSVG";
import {Button} from "common/components/button/Button";

export const Login = () => {

  const isAuth = useAppSelector(loginSelector)

  if (isAuth) {
    return <Navigate to='/profile'/>
  }


  return (
    <div className={s.loginFormContainer}>
      <LoginForm name={'Login'}/>
    </div>
  );
}

//====================================================================


type LoginFormType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: boolean,

};
export const LoginForm = (props:{name:string}) => {

  const dispatch = useDispatch<AppThunkDispatch>();

  const isAuth = useAppSelector(loginSelector)
  // const isAuth = useAppSelector<boolean>((state) => state.loginAuthorization.isAuth);

  const [error, setError] = useState<string | null>(null);

  const {register, handleSubmit, formState: {errors}, reset} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    }
  });

  const onSubmit: SubmitHandler<LoginFormType> = data => {
    console.log(data)
    dispatch(authLoginThunkC(data, setError));
    reset();
  }

  return (
    <div className={s.container}>
      <h2>{props.name}</h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputs}>
          <input type='email'
                 placeholder={'email'}
                 {...register('email', {
                   required: 'Fill in the @mail field',
                   pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                     message: 'Enter a valid e-mail address',
                   },
                 })}/>
          <div className={s.iconMail}><IconSvg name={'loginIn'}/></div>
          <div className={s.iconPass}><IconSvg name={'password'}/></div>

          <div className={`${errors.email || errors.password || error ? s.errors : ''}`}>
            <p>{errors.email?.message}</p>
            <p>{errors.password?.message}</p>
            <p>{error}</p>
          </div>

          <input type='password' placeholder={'Password'}
                 {...register("password", {
                   required: 'Fill in the password field',
                   minLength: {value: 4, message: 'min length is 4'}
                 })}/>
          <div></div>
        </div>

        <label className={s.checkbox}>
          <input type="checkbox" {...register('rememberMe')}/>remember my
        </label>

        {/*<div className={s.button}>*/}
        {/*  <input type="submit" disabled={isAuth}/>*/}
        {/*</div>*/}
        <Button name={'Login'} disabled={isAuth}/>
      </form>
    </div>
  );
};


