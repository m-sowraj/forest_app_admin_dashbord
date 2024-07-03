import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function BarChartCon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://elephant-tracker-api.onrender.com/api/elephant-sightings/getMonthwiseSightings');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', height: 250, backgroundColor: "rgba(7, 86, 5, 0.04)" }}>
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
