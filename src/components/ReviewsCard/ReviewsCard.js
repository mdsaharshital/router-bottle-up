import React from 'react';

const ReviewsCard = ({reviewsAll}) => {
    const {name,rating,review} = reviewsAll;
    return (
        <div>
            <div className='bg-purple-200 h-40 p-3 rounded-lg'>
                <h1 className='text-3xl my-2'>{name}</h1>
                <h2 className="text-xl my-2">Ratings: {rating}</h2>
                <h2 className=" my-2"> {review}</h2>
            </div>
        </div>
    );
};

export default ReviewsCard;