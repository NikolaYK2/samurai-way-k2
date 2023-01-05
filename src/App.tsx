import React from 'react';
import './App.css';
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {HeaderContainerConnect} from "./components/header/HeaderContainer";

// type AppPropsType = {
//     // store: StoreType,
//     // addPostChange:(newMessageUsers:any)=>void,
// }

function App() {
    return (
            <div className="wrapper">
                <HeaderContainerConnect/>
                <Main
                    // store={props.store}
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


