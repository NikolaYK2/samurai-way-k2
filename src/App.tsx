import React from 'react';
import './App.css';
import {Main} from "features/2-main/Main";
import {Footer} from "features/footer/Footer";
import {HeaderContainerConnect} from "features/1-header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {Loading} from "common/components/loading/Loading";
import {withRouter} from "common/selectors/WithRouter";
import {AppStateType} from "app/redux-store";
import {initializedAppThunkC} from "app/appReducer";

// type AppPropsType = {
//     // store: StoreType,
//     // addPostChange:(newMessageUsers:any)=>void,
// }

class App extends React.Component<AppTypesProps> {
    componentDidMount() {
        this.props.initializedAppThunk();
    }

    render() {
        if (!this.props.initialized) {//Если не инициализованы то показываем загрузку
            return <Loading/>
        }
        return (
            <div className="wrapper">
                <HeaderContainerConnect/>
                <Main/>
                <Footer/>
            </div>
        );

    }
}


type AppTypesProps = MapDispatchPropsType & MapStatePropsType;

type MapDispatchPropsType = {
    initializedAppThunk: () => void,
    // setUserData: (userId: number, email: string, login: string) => void,
}
type MapStatePropsType = {
    initialized: boolean,
    // setUserData: (userId: number, email: string, login: string) => void,
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized,
    }
}
export default compose<React.ComponentType>(
    withRouter, connect(mapStateToProps, {initializedAppThunk: initializedAppThunkC}))(App)

//FN COMPONENT
// function App() {
//     return (
//             <div className="wrapper">
//                 <HeaderContainerConnect/>
//                 <Main
//                     // store={props.store}
//                       // addPost={props.addPost}//Добавления обьекта с сообщением
//                       // proFilePage={props.state.proFilePage}//передаем значения для textarea value
//                       // addPostChange={props.addPostChange}
//                       // messagesPage={props.state.messagesPage}//смс между users
//                       // addMessageUsers={props.addMessageUsers}
//                       // addMessageUsersChange={props.addMessageUsersChange}
//                 />
//                 <Footer/>
//             </div>
//     );
// }
//
// export default App;


