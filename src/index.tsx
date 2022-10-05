import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {stateType} from "./redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let rerenderEntireTree=(state:stateType)=>{//функция перерисовки
    root.render(
        <React.StrictMode>
            <HashRouter>
                <App store={store}
                     // addPost={addPost}
                     // addPostChange={addPostChange}
                     // addMessageUsers={addMessageUsers}
                     // addMessageUsersChange={addMessageUsersChange}
                />
            </HashRouter>
        </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
}
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});
// store.subscribe(rerenderEntireTree);
// rerenderEntireTree();
reportWebVitals();


