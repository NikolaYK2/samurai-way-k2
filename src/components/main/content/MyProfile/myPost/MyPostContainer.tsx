import React from "react";
import {addPostAC, addPostChangeAC, postDataType} from "../../../../../redux/proFilePageReducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../redux/redux-store";
import {Dispatch} from "redux";

// type MyPostContainerType = {
//     // store: StoreType,
//     // dispatch: (action: ActionTypeFull)=>void,
//     message: string,
//     // addPost: () => void,
//     // addPostChange: (event: string) => void,
// }
// const MyPostContainer = (props: MyPostContainerType) => {
//     //ошибка при добавление пустой строки ===============================
//     // let [errorText, setErrorText] = useState<string | null>(null);
//     //====================================================================
// //======Добавления смс для кнопки======================================================
//     // const newPostElement = React.createRef<HTMLTextAreaElement>();//событие для textarea
//     //=====================================================================================
//
//     const addPostButtonHandler = () => {
//         // let text = newPostElement.current!.value;//привязываем событие к кнопке
//         //newPostElement - обьект у которого ест св-во current и берем value
//         // if (text !== '') {
//         // if (props.message !== '') {
//         // props.addPost();//message - можно не получать этот текст, оно и так сидит в state
//
//         //Переходим на dispatch и обязательно указываем тип ему, делая конкретный диспатч
//         // props.dispatch({type: "addPost", postMessage: props.message });
//         /*props.*/
//         // store.dispatch(addPostAC(/*props.*/store.getState().proFilePage.message));
//         // props.addPostChange('')//зачищаем пустой строкой смс после добавления / но лучше зачистку предоставить это BLL
//         //     newPostElement.current!.value = '';//привязываем событие к кнопке
//         // } else {
//         //     setErrorText('Может введешь что-нибудь, а?')
//         // }
//     }
//     //===============================================================================
// //добавление сообщения в textarea =========================================
//     const onCHandlerValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
//         // props.addPostChange(event.currentTarget.value)
//         /*props.*/
//         // store.dispatch(addPostChangeAC(event.currentTarget.value))
//         // setErrorText('')
//     }
//
//     return (
//         <>
//             <MyPost addPostChange={onCHandlerValue}
//                     addPost={addPostButtonHandler}
//                 // message={/*props.*/store.getState().proFilePage.message}
//                     message={props.message}
//                 // store={props.store}
//                 // dispatch={props.store.dispatch}
//             />
//         </>
//
//     );
// }

//ФУнкции которые возвращают объект. Создает контейнерную компоненту и
// внутри рендерит презантационную компаненту и внутрь презан. в качестве props передает те св-в
// что сидят в двух обьектах, это значит что в MyPost будет сидеть в пропсах и 1 и 2 функция

type MapStatePropsType = {
    message: string,
    postData: postDataType[],
}

type MapDispatchPropsType = {
    addPostChange:(text: string)=>void,
    addPost:(postMessage: string)=>void,
}

export type MyPostType = MapStatePropsType & MapDispatchPropsType;


const mapStateToProps = (state: AppStateType):MapStatePropsType => {//название функции обозначает замапить state на пропсы
    return {
        //getState мы уже не делаем
        message: state.proFilePage.message,
        postData: state.proFilePage.postData,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPostChange: (text: string) => {
            dispatch(addPostChangeAC(text))
        },
        addPost: (postMessage: string) => {
            dispatch(addPostAC(postMessage));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPost);//Вызываем ее два раза и во второй раз вызываем то ту фукнцию что она вернула в первой
//С библиотекой connect можно забыть про store