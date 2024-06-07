import React, { useContext } from "react"
import { useQuery } from "react-query";
import * as apiClient from './apiClient'

type AppContext = {
    isLoggedIn : boolean,
}

const Context = React.createContext<AppContext | undefined>(undefined);

//this component wraps the whole application and enables this data to be accessed from anywhere, within the application.
export const AppContextProvider = ({children} : {children : React.ReactNode}) => {
    const {isError} = useQuery("validateToken", apiClient.validateToken, {retry : false});
 
    return (
        <Context.Provider value={{isLoggedIn : !isError}}>
            {children}
        </Context.Provider>
    )
}

//method to access values in the program
export const useAppContext = () => {
    const context = useContext(Context);
    return context as AppContext;
}