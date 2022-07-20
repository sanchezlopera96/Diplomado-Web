import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
 
export default function Grafico({currency}) {
  return (
    <div className='container fluid'>
        <div className='row flex-row flex-nowrap'>
        <LineChart
          width={800}
          height={500}
          data={currency}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 10 }}
          name="BTC"/>
          {/*<Line type="monotone" dataKey="price" stroke="#82ca9d" />*/}
        </LineChart>
        </div>
      </div>
  )
}
