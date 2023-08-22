"use client"

import React, { useEffect, useState } from 'react';
import { BeerCard } from "@/components/BeerCard";
import { getBeers } from "@/service/request";

const Home: React.FC = () => {
  const [allBeers, setAllBeers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBeers() {
      try {
        const fetchedBeers = await getBeers();
        setAllBeers(fetchedBeers);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    }

    fetchBeers();
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Beer Gallery</h1>
          <p>Choose your best beer</p>
        </div>

        <section>
          <div className="home__beers-wrapper">
            {allBeers.map((beer: any) => (
              <BeerCard beer={beer} key={beer.id}/>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

