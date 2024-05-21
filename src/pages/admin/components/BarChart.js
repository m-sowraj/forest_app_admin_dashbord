import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 5 },
  { name: 'Feb', uv: 10 },
  { name: 'Mar', uv: 15 },
  { name: 'Apr', uv: 20 },
  { name: 'May', uv: 25 },
  { name: 'Jun', uv: 30 },
  { name: 'Jul', uv: 35 },
  { name: 'Aug', uv: 40 },
  { name: 'Sep', uv: 45 },
  { name: 'Oct', uv: 50 },
  { name: 'Nov', uv: 35 },
  { name: 'Dec', uv: 20 },
];

function BarChartCon() {
  return (
    <div style={{ width: '100%', height: 250 , backgroundColor:"rgba(7, 86, 5, 0.04)"}}>
      <ResponsiveContainer>
        <BarChart data={data} barCategoryGap="20%" barGap={5}>
          <XAxis dataKey="name" stroke='0' />
          <YAxis stroke='0' />
          <Bar dataKey="uv" fill="#00C782" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartCon;
