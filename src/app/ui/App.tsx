import React, {useEffect} from 'react';
import 'app/ui/App.css';
import {Main} from "features/2-main/Main";
import {Footer} from "features/footer/Footer";
import {HeaderContainerConnect} from "features/1-header/HeaderContainer";
import {Loading} from "common/components/loading/Loading";
import {useAppDispatch, useAppSelector} from "app/model/redux-store";
import {initializedAppThunkC} from "app/model/appReducer";
import {Login} from "features/0-auth/ui/login/Login";
import {ErrorsApp} from "common/components/errors/ErrorsApp";
import {initSelect} from "app/model/appSelectors";
import {isAuthSelect} from "features/0-auth/model/authSelectors";

// type AppPropsType = {
//     // store: StoreType,
//     // addPostChange:(newMessageUsers:any)=>void,
// }

// class App extends React.Component<AppTypesProps> {
//     componentDidMount() {
//         this.props.initializedAppThunk();
//     }
//
//     render() {
//         if (!this.props.initialized) {//Если не инициализованы то показываем загрузку
//             return <Loading/>
//         }
//         return (
//             <div className="wrapper">
//                 <HeaderContainerConnect/>
//                 <Main/>
//                 <Footer/>
//             </div>
//         );
//
//     }
// }
//
//
// type AppTypesProps = MapDispatchPropsType & MapStatePropsType;
//
// type MapDispatchPropsType = {
//     initializedAppThunk: () => void,
//     // setUserData: (userId: number, email: string, login: string) => void,
// }
// type MapStatePropsType = {
//     initialized: boolean,
//     // setUserData: (userId: number, email: string, login: string) => void,
// }
//
// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         initialized: state.app.initialized,
//     }
// }
// export default compose<React.ComponentType>(
//     withRouter, connect(mapStateToProps, {initializedAppThunk: initializedAppThunkC}))(App)

//FN COMPONENT
function App() {
  const init = useAppSelector(initSelect)
  const isAuth = useAppSelector(isAuthSelect)
  const dispatch = useAppDispatch()

  const allError = (promiseRejEvent:any) => {
    alert(promiseRejEvent + 'App alert')
  }
  useEffect(() => {
    dispatch(initializedAppThunkC())
    window.addEventListener('unhandledrejection', allError)
    return ()=>{
      window.removeEventListener('unhandledrejection', allError)
    }
  }, []);

  if (!init) {
    return <Loading/>
  }

  if (!isAuth) {
    return <Login/>
  }


  return (
    <div className="wrapper">
      <HeaderContainerConnect/>
      <Main/>
      <Footer/>
      <ErrorsApp/>
    </div>
  );
}

export default App;


