import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommentsSection from './CommentsSection';

describe('CommentsSection', () => {
  it('renders the comments section with initial values', () => {
    const commentsWithRating = [
      { text: 'Comment 1', rating: 4 },
      { text: 'Comment 2', rating: 5 },
    ];

    render(
      <CommentsSection
        commentsWithRating={commentsWithRating}
        newComment=""
        handleAddComment={() => {}}
        setNewComment={() => {}}
        rating={0}
        setRating={() => {}}
      />
    );

    expect(screen.getByText('How likely are you to recommend this beer?')).toBeInTheDocument();
    expect(screen.getByText('Add Comment')).toBeInTheDocument();
  });

  it('calls the handleAddComment function when the "Add Comment" button is clicked', () => {
    const handleAddComment = jest.fn(); 
    const setNewComment = jest.fn(); 
    const setRating = jest.fn(); 

    render(
      <CommentsSection
        commentsWithRating={[]}
        newComment="New Comment"
        handleAddComment={handleAddComment}
        setNewComment={setNewComment}
        rating={5}
        setRating={setRating}
      />
    );

    fireEvent.click(screen.getByText('Add Comment'));

    expect(handleAddComment).toHaveBeenCalled();
  });
});
