import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {stateType} from "./components/redux/state";

type AppPropsType = {
    state: stateType,
    addPost:(postMessage: string)=>void,
}

function App(props: AppPropsType) {
    return (
            <div className="wrapper">
                <Header/>
                <Main state={props.state} addPost={props.addPost}/>
                <Footer/>
            </div>
    );
}

export default App;


