

import React from 'react';
import { getBeers } from "@/service/request";
import { BeerCard } from "@/components/BeerCard";

export default async function BeerList({allBeers}: any) {

  console.log('allbeers', allBeers)

  return (
    <div className="home__beers-wrapper">
            {allBeers?.map((beer: any) => (
              <BeerCard beer={beer} key={beer.id} />
            ))}
            <BeerList />
          </div>
  )
}
