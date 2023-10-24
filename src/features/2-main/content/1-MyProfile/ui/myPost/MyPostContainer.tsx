import {connect} from "react-redux";
import {addPostAC, deletePostAC, postDataType} from "features/2-main/content/1-MyProfile/model/proFilePageReducer";
import {AppStateType} from "app/model/redux-store";
import {MyPost} from "features/2-main/content/1-MyProfile/ui/myPost/MyPost";

//ФУнкции которые возвращают объект. Создает контейнерную компоненту и
// внутри рендерит презантационную компаненту и внутрь презан. в качестве props передает те св-в
// что сидят в двух обьектах, это значит что в MyPost будет сидеть в пропсах и 1 и 2 функция

type MapStatePropsType = {
    postData: postDataType[],
}

type MapDispatchPropsType = {
    addPost:(postMessage: string)=>void,
    deletePost:(postId:string)=>void
}

export type MyPostType = MapStatePropsType & MapDispatchPropsType;


const mapStateToProps = (state: AppStateType):MapStatePropsType => {//название функции обозначает замапить state на пропсы
    return {
        postData: state.proFilePage.postData,
    }
}

export default connect(mapStateToProps, {
    addPost: addPostAC,
    deletePost: deletePostAC,
})(MyPost);//Вызываем ее два раза и во второй раз вызываем то ту фукнцию что она вернула в первой

// export default connect(mapStateToProps, mapDispatchToProps)(MyPost);//Вызываем ее два раза и во второй раз вызываем то ту фукнцию что она вернула в первой
//С библиотекой connect можно забыть про store