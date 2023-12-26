import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
})


function FavouritesContextProvider({children}){

    const [favourtieMealIds, setFavourtieMealIds] =  useState([]);

    addFavourite = (id) => {
        setFavourtieMealIds((currentState) => [...currentState, id]);
    }

    removeFavourite = (id) => {
        setFavourtieMealIds((currentState) => 
            currentState.filter(item => item !== id)
        );
    }

    const value = {
        ids: favourtieMealIds,
        addFavourite,
        removeFavourite
    }

    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    )
}

export default FavouritesContextProvider;