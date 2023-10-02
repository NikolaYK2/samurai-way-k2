import React, {useEffect} from 'react';
import 'app/App.css';
import {Main} from "features/2-main/Main";
import {Footer} from "features/footer/Footer";
import {HeaderContainerConnect} from "features/1-header/HeaderContainer";
import {Loading} from "common/components/loading/Loading";
import {useAppDispatch, useAppSelector} from "app/redux-store";
import {initializedAppThunkC} from "app/appReducer";
import {Login} from "features/0-auth/login/Login";

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
  const init = useAppSelector(state => state.app.initialized)
  const isAuth = useAppSelector(state => state.loginAuthorization.isAuth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializedAppThunkC())
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
    </div>
  );
}

export default App;


