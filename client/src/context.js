import React, { useState, useContext } from 'react';
import data from './data.json';
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [available, setAvailable] = useState(data)
  return <AppContext.Provider value={{available}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}