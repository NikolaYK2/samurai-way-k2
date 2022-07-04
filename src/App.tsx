import React from 'react';
import './App.css';
import Tehnologies from "./components/Tehnologies/Tehnologies";
import Header from "./components/Header/Header";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <input/>
            <input type="password"/>
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            Article 1
            <Rating value={1}/>
            <Header/>
            <Tehnologies/>
            <PageTitle title={'Hello Worlds'}/>
            Article 1
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Accordion titleValue={"Products"} collapsed={true}/>
            <Accordion titleValue={"Services"} collapsed={false}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: String,
}
function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>;
}

export default App;


