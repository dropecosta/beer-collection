import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

interface BeerDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  onAddBeer: (newBeer: any) => void;
}

const foodListExample = [
  "Aged Balsamic Glaze",
  "Baked Alaskan Wild Rice Casserole",
  "Black Bean and Blackberry Pancakes with Mint Dressing",
]

const AddBeerForm: React.FC<BeerDetailsProps> = ({
  isOpen,
  closeModal,
  onAddBeer,
}) => {
  const [beerInfo, setBeerInfo] = useState({
    name: "",
    tagline: "",
    image_url: "/bottle.png",
    ebc: "",
    abv: "",
    ibu: "",
    food_pairing: foodListExample
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBeerInfo({ ...beerInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBeer(beerInfo);
    // Clear the form fields
    setBeerInfo({
      name: "",
      tagline: "",
      image_url: "/bottle.png",
      ebc: "",
      abv: "",
      ibu: "",
      food_pairing: foodListExample
    });
    closeModal();
  };

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
                  <div>
                  <div className="beer-info__content-title">
                    <h2 className="beer-info__content-h2">Add a new beer</h2>
                  </div>
                    <form onSubmit={handleSubmit}>
                      <div className="mt-5">
                        <label>Name:</label>
                        <input
                          className="add-beer-form__input"
                          type="text"
                          name="name"
                          value={beerInfo.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mt-5">
                        <label>Tagline:</label>
                        <input
                          className="add-beer-form__input"
                          type="text"
                          name="tagline"
                          value={beerInfo.tagline}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mt-5">
                      <label>EBC:</label>
                        <input
                          className="add-beer-form__input"
                          type="text"
                          name="ebc"
                          value={beerInfo.ebc}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mt-5">
                      <label>ABV:</label>
                        <input
                          className="add-beer-form__input"
                          type="text"
                          name="abv"
                          value={beerInfo.abv}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mt-5">
                      <label>IBU:</label>
                        <input
                          className="add-beer-form__input"
                          type="text"
                          name="ibu"
                          value={beerInfo.ibu}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <button className="add-beer-form__button" type="submit">Add Beer</button>
                      </div>
                    </form>
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

export default AddBeerForm;
