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
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
        <p className='text-[14px] leading-[17px] text-center p-1'>
          {tagline}
        </p>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={image_url}
          alt="beer image"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="relative flex w-full mt-10">
        <div className="flex w-full justify-between text-grey">
          <div className="car-card__icon">
            <Image src="/color-icon.svg" width={30} height={30} alt="seat" />
            <p className="car-card__icon-text">{ebc} EBC</p>
          </div>
          <div className="car-card__icon">
            <Image src="/abv-icon.svg" width={30} height={30} alt="seat" />
            <p className="car-card__icon-text">{abv} ABV</p>
          </div>

          <div className="car-card__icon">
            <Image src="/hops-icon.svg" width={30} height={30} alt="seat" />
            <p className="car-card__icon-text">{ibu} IBU</p>
          </div>

          <div className="car-card__btn-container">
            <Button
              title="View More"
              containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
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