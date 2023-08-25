import React from "react";
import { BeerList } from "@/components/BeerList";

const Home: React.FC = async () => {
  return (
    <main className="overflow-hidden">
      <div className="padding-x padding-y max-width">
        <section>
          <div className="home__beers-wrapper">
            <BeerList id={0} name={""} tagline={""} image_url={""} ebc={0} abv={0} ibu={0} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
