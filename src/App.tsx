import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {stateType, StoreType} from "./components/redux/state";

type AppPropsType = {
    store: StoreType,
}

function App(props: AppPropsType) {
    return (
            <div className="wrapper">
                <Header/>
                <Main store={props.store}
                      // addPost={props.addPost}//Добавления обьекта с сообщением
                      // proFilePage={props.state.proFilePage}//передаем значения для textarea value
                      // addPostChange={props.addPostChange}
                      // messagesPage={props.state.messagesPage}//смс между users
                      // addMessageUsers={props.addMessageUsers}
                      // addMessageUsersChange={props.addMessageUsersChange}
                />
                <Footer/>
            </div>
    );
}

export default App;


