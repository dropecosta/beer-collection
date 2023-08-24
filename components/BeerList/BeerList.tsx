"use client";

import React, { useEffect } from "react";
import { getBeers } from "@/service/request";
import { useBeerContext } from "@/app/context/context";
import { BeerCard } from "../BeerCard";
import { BeerListProps } from "@/Types/beerType";

const BeerList: React.FC<BeerListProps> = () => {
  const { beersArray, setBeersArray, searchTerm, ph, abv } = useBeerContext();

  useEffect(() => {
    async function fetchBeers() {
      try {
        const fetchedBeers = await getBeers();
        setBeersArray(fetchedBeers);
        console.log(fetchedBeers)
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    }
    fetchBeers();
  }, []);

  const isDataEmpty = !Array.isArray(beersArray) || beersArray.length < 1 || !beersArray;

  const filterResults = beersArray.filter((result) => {
    let beerHasMatched = true;

    if (searchTerm) {
      beerHasMatched = result.name.toLowerCase().includes(searchTerm);
    }

    if (abv) {
      beerHasMatched = beerHasMatched && result.abv > 6;
    }

    if (ph) {
      beerHasMatched = beerHasMatched && result.ph < 4;
    }

    return beerHasMatched;
  });

  return (
    <>    
      {!isDataEmpty ? (
        filterResults.map((beer: BeerListProps, index: number) => <BeerCard beer={beer} key={index} />)
      ) : (
        <div>
          <h2>Loading beers...</h2>
        </div>
      )}
    </>
  );
};

export default BeerList;
