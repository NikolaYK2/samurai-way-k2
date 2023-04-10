import React from 'react';
import s from './Login.module.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authLoginThunkC} from "../../redux/loginReducer";
import {AppThunkDispatch, useAppSelector} from "../../redux/redux-store";

export const Login = () => {

    return (
        <div className={s.loginFormContainer}>
            <h2>Login</h2>
            <LoginForm/>
        </div>
    );
};

//====================================================================


// type Inputs = {
//     example: string,
//     exampleRequired: string,
// };
type LoginFormType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: boolean,

};
export const LoginForm = () => {
    const {register, handleSubmit, watch, formState: {errors, isValid}, reset} = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        }
    });
    const dispatch = useDispatch<AppThunkDispatch>();

    const isAuth = useAppSelector<boolean>((state) => state.loginAuthorization.isAuth)

    const onSubmit: SubmitHandler<LoginFormType> = data => {
        console.log(data)
        dispatch(authLoginThunkC(data));
        reset();//Очистка формы после отправки
    }
    //watch - это как e.value
    //formState:{} - ошибки сохраняет
    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <input placeholder={'login'} {...register('email', {required: 'Заполни поле'})}/>
            <p>{errors.email?.message}</p>
            <input placeholder={'Password'}
                   {...register("password", {
                       required: 'Заполни поле',
                       minLength: {value: 4, message: 'min length is 4'}
                   })}/>
            <p>{errors.password?.message}</p>
            {/*<input placeholder={'Password'}  {...register("password", {required: true, minLength: 5})}/>*/}
            <input type="checkbox" {...register('rememberMe')}/> remember my
            {/*<input type="submit" disabled={!isValid}/>*/}
            <input type="submit" disabled={isAuth}/>
            {/*<button>login</button>*/}
        </form>
    );
};


