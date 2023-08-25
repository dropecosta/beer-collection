'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";
import { BeerListProps } from "@/Types/beerType";


type BeerContextType = {
  beersArray: any[];
  setBeersArray: React.Dispatch<React.SetStateAction<any[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  ibu: boolean;
  setIbu: React.Dispatch<React.SetStateAction<boolean>>;
  abv: boolean;
  setAbv: React.Dispatch<React.SetStateAction<boolean>>;
  sortedBeers: BeerListProps[];
  setSortedBeers: React.Dispatch<React.SetStateAction<BeerListProps[]>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

export const BeerContext = createContext<BeerContextType | undefined>(undefined);

type BeerContextProviderProps = {
  children: ReactNode;

};

export const BeerContextProvider = ({ children }: BeerContextProviderProps) => {
  const [beersArray, setBeersArray] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ibu, setIbu] = useState(false);
  const [abv, setAbv] = useState(false);
  const [sortedBeers, setSortedBeers] = useState<BeerListProps[]>([]);
  const [sortBy, setSortBy] = useState<string>('');

  return (
    <BeerContext.Provider value={{ beersArray, setBeersArray, searchTerm, setSearchTerm, ibu, setIbu, abv, setAbv, sortedBeers, setSortedBeers, sortBy, setSortBy }}>
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
