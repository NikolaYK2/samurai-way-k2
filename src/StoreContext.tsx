import React from "react";
import {AppStateType, store} from "./redux/redux-store";


export const StoreContext = React.createContext(store);//StoreContext - задаем собственное имя

type ProviderType={
    children: any,
    store: any,
}
export const Provider = (props: ProviderType)=>{
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    );
}
