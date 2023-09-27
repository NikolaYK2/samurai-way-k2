import React, {useState} from 'react';
import s from 'features/0-auth/login/Login.module.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppThunkDispatch, useAppSelector} from "app/redux-store";
import {authLoginThunkC} from "features/redux/authReducer";
import {loginSelector} from "features/0-auth/login/selectors";

export const Login = () => {

    const isAuth = useAppSelector(loginSelector)

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

            <input type="submit" disabled={isAuth}/>
            <p>{error}</p>
        </form>
    );
};


