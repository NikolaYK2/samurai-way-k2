import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./components/redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let rerenderEntireTree=()=>{//функция перерисовки
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}
                     // addPost={addPost}
                     // addPostChange={addPostChange}
                     // addMessageUsers={addMessageUsers}
                     // addMessageUsersChange={addMessageUsersChange}
                />
            </BrowserRouter>
        </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();
reportWebVitals();


