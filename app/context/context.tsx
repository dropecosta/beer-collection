'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for your context value
type BeerContextType = {
  beersArray: any[];
  setBeersArray: React.Dispatch<React.SetStateAction<any[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  ph: boolean;
  setPh: React.Dispatch<React.SetStateAction<boolean>>;
  abv: boolean;
  setAbv: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context with the defined type
export const BeerContext = createContext<BeerContextType | undefined>(undefined);

// Define the type for the children prop
type BeerContextProviderProps = {
  children: ReactNode;

};

export const BeerContextProvider = ({ children }: BeerContextProviderProps) => {
  const [beersArray, setBeersArray] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ph, setPh] = useState(false);
  const [abv, setAbv] = useState(false);

  return (
    <BeerContext.Provider value={{ beersArray, setBeersArray, searchTerm, setSearchTerm, ph, setPh, abv, setAbv }}>
      {children}
    </BeerContext.Provider>
  );
};

export const useBeerContext = () => {
  const context = useContext(BeerContext);
  if (context === undefined) {
    throw new Error("useBeerContext must be used within a BeerContextProvider");
  }
  return context;
};
