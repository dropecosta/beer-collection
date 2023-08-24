import { useState } from "react";
import { Rating } from "../Rating";

interface CommentsProps {
  commentsWithRating: { text: string; rating: number }[];
  newComment: string;
  handleAddComment: () => void;
  setNewComment: (comment: string) => void;
  rating: number;
  setRating: (rating: number) => void; 
};

const CommentsSection: React.FC<CommentsProps> = ({
  commentsWithRating,
  newComment,
  handleAddComment,
  setNewComment,
  rating,
  setRating,
}) => {
  const [localRating, setLocalRating] = useState<number>(rating); 

  return (
    <>
      <div className="mt-4">
        <h3>How likely are you to recommend this beer?</h3>
        <Rating
          count={5}
          value={rating} 
          edit={true}
          onChange={(value) => {
            setLocalRating(value); 
            setRating(value); 
          }}
        />
        <input
          type="text"
          placeholder="Add a comment about this beer..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comments__input"
        />
        <button onClick={handleAddComment} className="comments__button">
          Add Comment
        </button>
      </div>
      {commentsWithRating.length > 0 ? (
        <div className="mt-4">
          <h3>Comments:</h3>
          <ul>
            {commentsWithRating.map((comment, index) => (<>
              <li className="comments__li" key={index}>
                <p>Rating: <span className="pl-1 text-[13px] text-black font-bold">{comment.rating}</span></p>
                <p>Comment: <span className="pl-1 text-[13px] text-black font-bold">{comment.text}</span></p>
              </li>
              <div className="flex">
                <img src="user.png" className="w-6 h-6" alt="user-icon" />
                <span className="pl-1 text-[12px] italic text-grey">&#8212; &nbsp; commented by</span>
                <span className="pl-1 text-[12px] italic text-black font-bold">John Doe</span>
              </div>
              </>))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CommentsSection