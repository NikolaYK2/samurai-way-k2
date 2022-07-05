import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/Footer";

function App() {
    console.log("App rendering")
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>);
}

export default App;


