import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto w-3/4'>
            <div className="border-2 m-3 rounded my-4 p-3">
                <h1 className="text-2xl font-bold my-3">What is Semantic Tag?</h1>
                <p>When html was first created Every html elements were put inside DIV container. Because of that it was a little hard to read the code and understand which is which. With HTML5 release they introduced semantic elements. Now instead of DIV people use those semantic tags such as <span className='font-bold'> article, table, header, footer, main, nav</span> etc. Because of these it became easier to read and understand code.</p>
            </div>
            <div className="border-2 m-3 rounded my-4 p-3">
                <h1 className="text-2xl font-bold my-3">What is Context Api?</h1>
                <p>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they're passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.</p>
            </div>
        </div>
    );
};

export default Blogs;