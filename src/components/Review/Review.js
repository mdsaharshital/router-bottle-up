import React from 'react';
import useReview from '../hook/useReview';
import ReviewsCard from '../ReviewsCard/ReviewsCard';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <div className="p-3 container mx-auto">
            <h1 className='text-2xl text-purple-400 font-bold'>See What our customers say about us</h1>
            <div className="grid md:grid-cols-3 gap-4 my-8">
                {
                    reviews.map( review => <ReviewsCard key={review.id} reviewsAll={review}/>)
                }
            </div>
            </div>
        </div>
    );
};

export default Review;