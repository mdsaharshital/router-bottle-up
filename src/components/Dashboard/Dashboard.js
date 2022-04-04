import React from 'react';
import MyLineCharts from '../MyLineCharts/MyLineCharts';

const Dashboard = () => {
    return (
        <div className='mx-auto p-3 container' >
            <h2 className='text-xl my-4 font-bold'>Analyze Our Statement</h2>
            <MyLineCharts></MyLineCharts>
        </div>
    );
};

export default Dashboard;