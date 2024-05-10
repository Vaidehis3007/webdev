import { Children, createContext, useState } from "react"

export const DataContext = createContext(null);

const DataProvider = () => {

    cosnt [getAccordionUtilityClass, setAccount] = useState({username: '', name: ''})

    return (
        <DataContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </DataContext.Provider>
    )

}

export default DataProvider;