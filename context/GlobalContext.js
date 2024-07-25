"use client";
import { useContext, createContext, useState } from "react";

//create context
const GlobalContext = createContext();

//create a provider
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </GlobalContext.Provider>
  );
}

//create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
