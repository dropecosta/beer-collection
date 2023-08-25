import Image from "next/image";
import './beerinfo.css';
interface BeerInfoProps {
  beer: {
    name: string;
    tagline: string;
    description: string;
    abv: number;
    ibu: number;
    ebc: number;
    food_pairing: string[];
  };
}

const BeerInfo: React.FC<BeerInfoProps> = ({ beer }) => {
  const { name, tagline, description, abv, ibu, ebc, food_pairing } = beer;

  return (
    <>
      <div className="beer-info__content-title">
        <h2 className="beer-info__content-h2">{name}</h2>
        <p className="beer-info__content-tagline">{tagline}</p>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <p className="beer-info__content-description">{description}</p>

        <div className="beer-info__icon-container">
          <div className="beer-info__icon">
            <Image src="/color-icon.svg" width={30} height={30} alt="ebc-icon" />
            <p className="beer-info__icon-text">{ebc} EBC</p>
          </div>
          <div className="beer-info__icon">
            <Image src="/abv-icon.svg" width={30} height={30} alt="abv-icon" />
            <p className="beer-info__icon-text">{abv} ABV</p>
          </div>
          <div className="beer-info__icon">
            <Image src="/hops-icon.svg" width={30} height={30} alt="ibu-icon" />
            <p className="beer-info__icon-text">{ibu} IBU</p>
          </div>
        </div>
        <div>
          <h3 className="pb-3">Food Pairing:</h3>
          <ul className="mb-3">
            {food_pairing?.map((item: any, index: any) => (
              <li
                className="beer-info__food-pairing"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BeerInfo
