'use client'
import React, { createContext, useState } from 'react';

const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [someProp, setSomeProp] = useState('initialValue');
  

  return (
    <NavBarContext.Provider value={{ someProp, setSomeProp }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarContext;