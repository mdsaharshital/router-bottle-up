import React from 'react';
import useReview from '../hook/useReview';
import ReviewsCard from '../ReviewsCard/ReviewsCard';

const Home = () => {
    const imgUrl =`https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80`;

    const [reviews, setReviews] = useReview();
    
    return (
        <div className='container mx-auto h-screen p-3'>
            <div className="grid md:grid-cols-2 my-4">
                <div className="flex flex-col justify-center text-center mx-auto my-4">
                    <h1 className="text-5xl font-bold text-purple-400 text-left">
                        Get Bottle up Now!
                    </h1>
                    <h1 className="text-5xl font-bold text-purple-400 text-left">
                       Be Smart!
                    </h1>
                    <button className='py-2 px-3 bg-purple-400 my-4 rounded text-white cursor-pointer w-1/3'>Buy Now!</button>
                </div>
                <div className="mx-auto my-4 ">
                    <img src={imgUrl} className='rounded-xl' alt="" />
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 my-8">
                {
                    reviews.map( review => <ReviewsCard key={review.id} reviewsAll={review}/>).slice(0,3)
                }
            </div>
                <button className='py-2 px-3 bg-purple-400 my-4 rounded text-white cursor-pointer mx-auto'>See All Reviews</button>
        </div>
    );
};

export default Home;