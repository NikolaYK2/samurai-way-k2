import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "app/redux-store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


// let rerenderEntireTree=()=> {//функция перерисовки - убираем так как рендерит теперь то что нужно функция connect
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        {/*<HashRouter>*/}
        {/*<StoreContext.Provider value={store}>*/}
        <Provider store={store}>{/* - Компонента которая работает с контекстом API*/}
            <App
                // store={store}//store теперь не передаем через пропсы, есть API
                // addPost={addPost}
                // addPostChange={addPostChangeAC}
                // addMessageUsers={addMessageUsers}
                // addMessageUsersChange={addMessageUsersChange}
            />
        </Provider>
        {/*</StoreContext.Provider>*/}
        {/*</HashRouter>*/}
    </BrowserRouter>
    // </React.StrictMode>
);
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// }
// // store.subscribe(()=>{
// //     let state = store.getState();
// //     rerenderEntireTree(state);
// // });
// store.subscribe(rerenderEntireTree);
// rerenderEntireTree();
reportWebVitals();


//storeContext просто напоминалка=========================================
// import React from "react";
// import {AppStateType, store} from "./redux/redux-store";
//
//
// export const StoreContext = React.createContext(store);//StoreContext - задаем собственное имя
//
// type ProviderType={
//     children: any,
//     store: any,
// }
// export const Provider = (props: ProviderType)=>{
//     return (
//         <StoreContext.Provider value={props.store}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// }
