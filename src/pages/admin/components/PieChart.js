import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';

const data = [
  { name: 'Group A', value: 7, status: 'Accepted' },
  { name: 'Group B', value: 2, status: 'Declined' },
];

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

const getTotalValue = () => {
  return data.reduce((acc, cur) => acc + cur.value, 0);
};

const totalValue = getTotalValue(); // Calculate total value outside of the component

const PieChartCon = () => {
  return (
    <ResponsiveContainer width="100%" height={200} style={{position:"relative"}}>
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
  );
};

export default PieChartCon;
