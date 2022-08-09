import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {stateType} from "./components/redux/state";

type AppPropsType = {
    state: stateType,
}

function App(props: AppPropsType) {
    return (
            <div className="wrapper">
                <Header/>
                <Main state={props.state}/>
                <Footer/>
            </div>
    );
}

export default App;


