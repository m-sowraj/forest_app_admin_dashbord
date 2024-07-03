import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';
import axios from 'axios';

const COLORS = ['#00C782', 'rgba(235, 77, 85, 1)'];

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, value, status }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <circle cx={x} cy={y} r={35} fill="white" />
      <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="middle">
        <tspan x={x} dy="-0.5em" fontSize="14px" style={{ fontWeight: "bold" }}>{value}</tspan>
        <tspan x={x} dy="1.2em" fontSize="12px" fill="#555">{status}</tspan>
      </text>
    </g>
  );
};

const PieChartCon = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({ total: 0, accepted: 0, declined: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://elephant-tracker-api.onrender.com/api/elephant-sightings/getTodaysSightings');
        const { total, accepted, declined } = response.data;

        const chartData = [
          { name: 'Accepted', value: accepted+1, status: 'Accepted' },
          { name: 'Declined', value: declined+1, status: 'Declined' }
        ];

        setData(chartData);
        setStats({ total, accepted, declined });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <ResponsiveContainer width="100%" height={200} style={{ position: "relative" }}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={0}
            dataKey="value"
            labelLine={false}
            label={renderCustomLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
            ))}
          </Pie>
          <Text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
            fontSize={16}
            fontWeight="bold"
          >
            Total: {totalValue}
          </Text>
        </PieChart>
      </ResponsiveContainer>
      <div className='font-sm text-[12px] px-0 text-black'>
        Total {stats.total + 2} reports submitted on {currentDate}, {stats.accepted+1} accepted and {stats.declined+1} not accepted
      </div>
    </>
  );
};

export default PieChartCon;
