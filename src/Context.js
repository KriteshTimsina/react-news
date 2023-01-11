import React, { useContext } from "react";
// import Search from "./components/Search/Search";

const AppContext = React.createContext(); //context creation

const AppProvider = ({ children }) => { //provider function
    return (
        <AppContext.Provider value={"css"} >
            {children}
        </AppContext.Provider>
    )
}

// creating custom hook so wo don't need to import AppContext multiple times
//hooks can be created by using useHookname eg: useKritesh

const useGlobalContext = () => {
    return useContext(AppContext);
}
//if not created custom hook
//we need to import appcontext in a component where we want to use
//and do : data = useContext(AppContext)
//after custom hook 
//data = useGlobalContext();

export { useGlobalContext, AppContext, AppProvider }; //export multiple item using {}