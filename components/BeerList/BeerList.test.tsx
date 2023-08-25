import React from "react";
import { render, screen } from "@testing-library/react";
import BeerList from "./BeerList";
import { BeerContextProvider } from "@/app/context/context";

describe("BeerList", () => {
  it("renders loading message when no data is available", () => {
    render(
      <BeerContextProvider>
        <BeerList id={0} name={""} tagline={""} image_url={""} ebc={0} abv={0} ibu={0} />
      </BeerContextProvider>
    );

    // Check if loading message is present when data is empty
    expect(screen.getByText("Loading beers...")).toBeInTheDocument();
  });
});
