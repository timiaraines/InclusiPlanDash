import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
