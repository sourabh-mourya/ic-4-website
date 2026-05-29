// CountContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context object
const CountContext = createContext();

// Create a CountProvider component
export function ContextProvider({ children }) {
  const [count, setCount] = useState(0);

  // Define the context value
  
  // Provide the context value to the children components
  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  );
}

// Create a custom hook to access the context
export function useCount() {
  return useContext(CountContext);
}
