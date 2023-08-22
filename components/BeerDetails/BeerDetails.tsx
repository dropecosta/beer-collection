import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
// import { CarProps } from "@types";
// import { generateCarImageUrl } from "@utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  //car: CarProps;
  beer: any;
}

const BeerDetails = ({ isOpen, closeModal, beer }: CarDetailsProps) => {
  const {
    id,
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    abv,
    ibu,
    target_fg,
    target_og,
    ebc,
    srm,
    ph,
    attenuation_level,
    volume,
    boil_volume,
    method,
    ingredients,
    food_pairing,
    brewers_tips,
    contributed_by,
  } = beer;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-[60%] max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <h2 className="car-card__content-title">{name}</h2>
                    <p className="text-[14px] leading-[17px] text-center p-1">
                      {tagline}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <p className="text-grey">{description}</p>

                    <div className="mt-3 flex flex-wrap gap-4 justify-between">
                      <div className="flex justify-between gap-5 text-right">
                        <Image
                          src="/color-icon.svg"
                          width={30}
                          height={30}
                          alt="seat"
                        />
                        <p className="text-black-100 font-semibold">
                          {ebc} EBC
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 text-right">
                        <Image
                          src="/abv-icon.svg"
                          width={30}
                          height={30}
                          alt="seat"
                        />
                        <p className="text-black-100 font-semibold">
                          {abv} ABV
                        </p>
                      </div>
                      <div className="flex justify-between gap-5 text-right">
                        <Image
                          src="/hops-icon.svg"
                          width={30}
                          height={30}
                          alt="seat"
                        />
                        <p className="text-black-100 font-semibold">
                          {ibu} IBU
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3>Food Pairing:</h3>
                      <ul>
                        {food_pairing.map((item: any, index: any) => (
                          <li className="text-[13px] text-grey p-4 bg-primary-blue-100 mt-2 mb-2" key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BeerDetails;
