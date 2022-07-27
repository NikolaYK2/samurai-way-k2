import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//DATA messagesUsers /dialogs/=============================================================
export const users = [
    {id: v1(), name: "Nik", link: "1"},
    {id: v1(), name: "Vita", link: "2"},
    {id: v1(), name: "Vova", link: "3"},
    {id: v1(), name: "Dima", link: "4"},
]
export const usersMessages = [
    {id: v1(), sms: "Hi",},
    {id: v1(), sms: "How is your",},
    {id: v1(), sms: "Eeeee",},
    {id: v1(), sms: "Cool",},
]
//==============================================================
//=============PostData /MyProfile/====================================
export const postData = [
    {id: v1(), sms: "Ha, how are you?", like: 15,},
    {id: v1(), sms: "It's my first post", like: 43,},
]
//===============================================================
//===============================================================
