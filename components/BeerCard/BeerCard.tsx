"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "../Button";
import { BeerDetails } from "../BeerDetails";

interface Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  ebc: number;
  abv: number;
  ibu: number;
}

interface BeerCardProps {
  beer: Beer;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
  const { id, name, tagline, image_url, ebc, abv, ibu } = beer;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="beer-card group">
      <div className="beer-card__content">
        <h2 className="beer-card__content-title">{name}</h2>
        <p className='beer-card__content-tagline'>{tagline}</p>
      </div>
      <div className="beer-card__image-container">
        <Image
          src={image_url}
          className="beer-card__img"
          alt="beer image"
          fill
          sizes="100%"
          
        />
      </div>
      <div className="relative flex w-full mt-10">
        <div className="beer-card__icon-container">
          <div className="beer-card__icon">
            <Image src="/color-icon.svg" width={30} height={30} alt="ebc-icon" />
            <p className="beer-card__icon-text">{ebc} EBC</p>
          </div>
          <div className="beer-card__icon">
            <Image src="/abv-icon.svg" width={30} height={30} alt="abv-icon" />
            <p className="beer-card__icon-text">{abv} ABV</p>
          </div>

          <div className="beer-card__icon">
            <Image src="/hops-icon.svg" width={30} height={30} alt="ibu-icon" />
            <p className="beer-card__icon-text">{ibu} IBU</p>
          </div>

          <div className="beer-card__btn-container">
            <Button
              title="View More"
              containerStyles="w-full py-[16px] rounded-full bg-primary-blue group-hover:visible"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <BeerDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} beer={beer} />
      </div>
    </div>
  );
};

export default BeerCard;