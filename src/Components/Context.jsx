import { createContext, useContext } from "react";

const  AppContext = createContext(null);

export const useAppContext =()=>{
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error('Appcontext must be within appContextProvider')
    }
    return context;
}

const AppContextProvider = ({props})=>{
    const  [favorites, setFavorites] = useState([])

    const addToFavorites = ()=> {

    }

    const removeFromFavorites = (id)=> {

    }

    return(
        <AppContext.Provider value={{ favorites, addToFavorites, removeFromFavorites}}>
            {props}
        </AppContext.Provider>
    )
}

export default AppContextProvider;