import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineCharts = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='grid  md:grid-cols-2 my-6'>
        <div className="">
            <h2 className='text-purple-400 font-bold'>Month wise sell</h2>
            <LineChart width={400} height={300} data={data}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}/>
                <YAxis/>
                <Tooltip/>
            </LineChart>
        </div>
        <div className="">
            <h2 className='text-purple-400 font-bold'> Investment VS Revenue</h2>
        <AreaChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8"  />
        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
        </div>
       
        </div>
    );
};

export default MyLineCharts;