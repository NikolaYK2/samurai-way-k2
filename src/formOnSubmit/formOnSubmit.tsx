import {SubmitHandler} from "react-hook-form";


export const formOnSubmit = (message: string, addFn: (text: string) => void, setFn: (text: string) => void, setErrorFn: (text: string) => void) => {

    const onSubmit: SubmitHandler<any> = data => {
        if (message !== '') {
            addFn(message);//message - можно не получать этот текст, оно и так сидит в state
            console.log(data)
            setFn('');
            //Переходим на dispatch и обязательно указываем тип ему, делая конкретный диспатч
            // props.dispatch({type: "addPost", postMessage: props.message });
            // props.dispatch(addPostAC(props.message));
            // props.addPostChange('')//зачищаем пустой строкой смс после добавления / но лучше зачистку предоставить это BLL
            //     newPostElement.current!.value = '';//привязываем событие к кнопке
        } else {
            setErrorFn('Может введешь что-нибудь, а?')
        }
        // reset();//Очистка формы после отправки
    }
    return onSubmit;
}