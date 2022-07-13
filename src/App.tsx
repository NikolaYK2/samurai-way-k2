import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    console.log("App rendering")
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;


