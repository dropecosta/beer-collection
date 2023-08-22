"use client"

import React, { FC, useState } from 'react';
import { BeerCard } from "@/components/BeerCard";
import ReactPaginate from "react-paginate";
import { BeerList } from '@/components/BeerList';
import { UseBeersProps, getBeers } from "@/service/request";
import { useSearchParams } from 'next/navigation';


const Home = async (props: UseBeersProps) => {
  const [queryObject, setQueryObject] = useState<UseBeersProps>(props);


  const allBeers = await getBeers();
  //console.log("allBeers", allBeers);
  
  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Beer Gallery</h1>
          <p>Choose your best beer</p>
        </div>

        <section>
          <div className="home__beers-wrapper">
            {allBeers?.map((beer: any) => (
              <BeerCard beer={beer} key={beer.id}/>
            ))}
           
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home

