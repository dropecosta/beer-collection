"use client";

import React, { useState, useEffect } from "react";
import { getBeers } from "@/service/request";
import { useBeerContext } from "@/app/context/context";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import  { FiltersList } from "../FiltersList";
import { Button } from "../Button";
import { AddBeerForm } from "../AddBeerForm";
import './navbar.css';

interface Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  ebc: number;
  abv: number;
  ibu: number;
}

const NavBar = () => {
  const { beersArray, setBeersArray, searchTerm, setSearchTerm, ibu, setIbu, abv, setAbv, setSortedBeers, sortBy, setSortBy } = useBeerContext();

  useEffect(() => {
    async function fetchBeers() {
      try {
        const fetchedBeers = await getBeers();
        setBeersArray(fetchedBeers);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    }
    fetchBeers();
  }, []);

  useEffect(() => {
    const sortedData = [...beersArray];
    if (sortBy === 'asc') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'desc') {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }
    setSortedBeers(sortedData);
  }, [beersArray, sortBy]);

  const handleSortClick = () => {
    if (sortBy === 'asc') {
      setSortBy('desc');
    } else {
      setSortBy('asc');
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const filterByIbu = () => {
    setIbu(!ibu);
  };

  const filterByABV = () => {
    setAbv(!abv);
  };

  const handleInput = (event: { target: { value: string } }) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);
  };

  const addNewBeer = (newBeer: Beer) => {
    const updatedBeersArray = [newBeer, ...beersArray];
    setBeersArray(updatedBeersArray);
    localStorage.setItem('beersArray', JSON.stringify(updatedBeersArray));
  };

  return (
    <header className="w-full">
      <nav className="navbar__container">
        <Link href="/" className="flex justify-center items-center">
          <div className="navbar__title">
          <h1 className="navbar__title-h1">Beer Gallery</h1>
          <p>Choose your best beer</p>
        </div>
        </Link>
        <SearchBar handleInput={handleInput} searchTerm={searchTerm} /> 
           
        <Button
          title="Add new beer"
          containerStyles="xl:w-[150px] sm:w-[300px] w-full xl:my-0 my-5 rounded-full bg-gray-400"
          textStyles="text-white text-[12px] my-2 leading-[17px] font-bold uppercase"
          handleClick={() => setIsOpen(true)}
        />
        <button 
          onClick={handleSortClick}
          className="text-black text-[12px] xl:my-2 my-8 leading-[17px] font-bold uppercase"
        >
          {sortBy === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
        </button>
        <FiltersList
          className="navbar__filter-container"
          filterByABV={filterByABV}
          filterByIbu={filterByIbu}
        />
      </nav>
      <AddBeerForm isOpen={isOpen} closeModal={() => setIsOpen(false)} onAddBeer={addNewBeer} />
    </header>
  );
};

export default NavBar;
