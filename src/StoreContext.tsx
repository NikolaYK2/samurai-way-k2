import React from "react";
import {store, StoreType} from "./redux/redux-store";


export const StoreContext = React.createContext(store);//StoreContext - задаем собственное имя

type ProviderType={
    children: any;
    store: StoreType
}
export const Provider = (props: ProviderType)=>{
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    );
}
