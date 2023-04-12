import React, {useState} from 'react';
import s from './Login.module.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authLoginThunkC} from "../../redux/loginReducer";
import {AppThunkDispatch, useAppSelector} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";

export const Login = () => {

    const isAuth = useAppSelector<boolean>((state) => state.loginAuthorization.isAuth)

    if (isAuth) {
        return <Navigate to='/profile'/>
    }


    return (
        <div className={s.loginFormContainer}>
            <h2>Login</h2>
            <LoginForm/>
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
export const LoginForm = () => {

    const dispatch = useDispatch<AppThunkDispatch>();

    const isAuth = useAppSelector<boolean>((state) => state.loginAuthorization.isAuth);

    const [er,setEr] =useState<string | null>(null);

    const {register, handleSubmit, formState: {errors}, setError, reset} = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        }
    });

    const onSubmit: SubmitHandler<LoginFormType> = data => {
        console.log(data)
        dispatch(authLoginThunkC(data,setEr));
        reset();//Очистка формы после отправки
    }

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <input type='email'
                   placeholder={'email'}
                   {...register('email', {
                       required: 'Заполните поле',
                       pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                           message: 'Enter a valid e-mail address',
                       },
                   })}/>
            <p>{errors.email?.message}</p>
            <input type='password' placeholder={'Password'} 
                   {...register("password", {
                       required: 'Заполни поле',
                       minLength: {value: 4, message: 'min length is 4'}
                   })}/>
            <p>{errors.password?.message}</p>
            <input type="checkbox" {...register('rememberMe')}/> remember my
            <input type="submit" disabled={isAuth} onClick={()=>setError('email',{types:{test:'gavno'}})}/>
            <p>{er}</p>
        </form>
    );
};


