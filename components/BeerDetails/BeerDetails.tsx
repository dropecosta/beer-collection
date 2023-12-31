import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { BeerInfo } from "../BeerInfo";
import { CommentsSection } from "../CommentsSection"; 

interface BeerDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  beer: any;
}

const BeerDetails: React.FC<BeerDetailsProps> = ({ isOpen, closeModal, beer }) => {
  const [commentsWithRating, setCommentsWithRating] = useState<{ text: string; rating: number }[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const savedComments = localStorage.getItem("beerComments");
    if (savedComments) {
      setCommentsWithRating(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("beerComments", JSON.stringify(commentsWithRating));
  }, [commentsWithRating]);

  const handleAddComment = () => {
    if (newComment) {
      setCommentsWithRating([
        ...commentsWithRating,
        { text: newComment, rating: rating },
      ]);
      setNewComment("");
      setRating(0);
    }
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
            <div className="flex min-h-screen items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="relative w-full sm:max-w-[60%] max-w-[90%] max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
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
                  <main>
                    <BeerInfo beer={beer} />
                    <CommentsSection
                      commentsWithRating={commentsWithRating}
                      newComment={newComment}
                      handleAddComment={handleAddComment}
                      setNewComment={setNewComment}
                      rating={rating}
                      setRating={setRating}
                    />
                  </main>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BeerDetails;
