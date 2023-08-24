interface CommentProps {
    comments: string[];
    newComment: string;
    handleAddComment: () => void;
    setNewComment: (comment: string) => void;
  }
  
  const CommentSection: React.FC<CommentProps> = ({
    comments,
    newComment,
    handleAddComment,
    setNewComment,
  }) => {
    return (
      <>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add a comment about this beer..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comments__input"
          />
          <button
            onClick={handleAddComment}
            className="comments__button"
          >
            Add Comment
          </button>
        </div>
        {comments.length > 0 ?
        <div className="mt-4">
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment: string, index: number) => (
              <li className="comments__li" key={index}>
                {comment}
              </li>
            ))}
          </ul>
        </div> : ''
        }
      </>
    );
  };

  export default CommentSection