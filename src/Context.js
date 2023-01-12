import React, { useContext } from "react";
import { useEffect, useReducer } from "react";
// import Search from "./components/Search/Search";
import { reducer } from "./reducer";
const AppContext = React.createContext(); //context creation

let API = `http://hn.algolia.com/api/v1/search?`;
const initialValue = {
    isLoading: true,
    page: 0,
    nbPages: 0,
    query: "REACT",
    hits: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    const fetchApiData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            dispatch(
                {
                    type: "FETCH_STORIES",
                    payload: {
                        hits: data.hits,
                        nbPages: data.nbPages,
                    }
                })

        } catch (error) {
            console.log(error);
        }

    }
    function setSearch(searchQuery) {
        dispatch({
            type: "SET_SEARCH",
            payload: searchQuery
        })
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query])
    //all business logic will be written here


    //provider function
    return (
        <AppContext.Provider value={{ ...state, setSearch }} >
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