import React from "react";
import { BeerList } from "@/components/BeerList";

const Home: React.FC = async () => {

  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width">
        <section>
          <div className="home__beers-wrapper">
            <BeerList />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
