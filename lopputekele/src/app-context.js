import { createContext, useEffect, useState } from "react";


const AppContext = createContext([{}, () => {}])


const AppProvider = ({ children }) => {
    

    const [state, setState] = useState({
        tallennetutLinet: [],
        haetutLinet: [],
        sanaMäärä: 1,
        sopivatQuotet: []
    })   



    return(
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    )

}

export {AppContext, AppProvider}