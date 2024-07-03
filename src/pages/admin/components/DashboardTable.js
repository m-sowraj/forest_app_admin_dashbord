import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './table.module.css';

function DashboardTable({ data, data_ }) {

  const columns = ['ID', 'Date', 'Name Of Reporter', 'Report description', 'Photo', 'Cluster name', 'Status'];
  const columns_ = ['ID', 'Date', 'Name Of Reporter', 'Report description', 'Status'];

  const [recentSightings, setRecentSightings] = useState([]);

  useEffect(() => {
    const fetchRecentSightings = async () => {
      try {
        const response = await axios.get('https://elephant-tracker-api.onrender.com/api/elephant-sightings/getRecentSightings');
        setRecentSightings(response.data);
      } catch (error) {
        console.error('Error fetching recent sightings:', error);
      }
    };

    fetchRecentSightings();
  }, []);

  const formatTimeDifference = (timestamp) => {
    const now = new Date();
    const diffInMilliseconds = now - new Date(timestamp);
  
    // Convert milliseconds to minutes
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  
    if (diffInMinutes < 60) {
      return `${diffInMinutes} mins ago`;
    } else {
      // Convert minutes to hours
      const diffInHours = Math.floor(diffInMinutes / 60);
      
      if (diffInHours < 24) {
        return `${diffInHours} hours ago`;
      } else {
        // Convert hours to days
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} days ago`;
      }
    }
  };
  

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col pl-4 py-8 mt-4 m-4' style={{ backgroundColor: "#F3FFF6", borderRadius: "25px" }}>
        <div className='text-xl font-semibold text-black pl-10'>Submitted Reports</div>
        <div className={`${styles.gridContainer} ${styles.gridContainerReq}`} style={{ color: "#000" }}>
          <div className={styles.gridHeader}>
            {columns.map((col) => (
              <div key={col} className={`${styles.gridItem} ${styles.header}`}>{col}</div>
            ))}
          </div>
          <div className={styles.gridBody}>
            {data.map((row, index) => (
              <div key={index} className={styles.gridRow}>
                {columns.map((col) => (
                  <div key={col} className={styles.gridItem} style={{ borderBottom: "1px solid #ddd" }}>
                    {col === 'Photo' ? (
                      row[col] ? <img src={row[col]} alt="Report" className={styles.gridPhoto} /> : 'No Photo'
                    ) : col === 'Status' ? (
                      <span className={row[col] === 'Accepted' ? styles.accepted : styles.rejected}>
                        {row[col]}
                      </span>
                    ) : (
                      row[col]
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='flex flex-col pl-4 py-8 mt-4 m-4' style={{ backgroundColor: "#F3FFF6", borderRadius: "25px", minWidth: "15em", maxWidth: "fit-content" }}>
          <div className='text-xl font-semibold text-black pl-8'>Reports</div>
          <div className={`${styles.gridContainer} ${styles.gridContainerReq1}`} style={{ color: "#000" }}>
            <div className={styles.gridHeader}>
              {columns_.map((col) => (
                <div key={col} className={`${styles.gridItem_} ${styles.header}`}>{col}</div>
              ))}
            </div>
            <div className={styles.gridBody}>
              {data_.map((row, index) => (
                <div key={index} className={styles.gridRow}>
                  {columns_.map((col) => (
                    <div key={col} className={styles.gridItem_} style={{ borderBottom: "1px solid #ddd" }}>
                      {col === 'Status' ? (
                        <span className={row[col] === 'Accepted' ? styles.accepted : styles.rejected}>
                          {row[col]}
                        </span>
                      ) : (
                        row[col]
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 p-10 m-4' style={{ backgroundColor: "rgb(243, 255, 246)", borderRadius: "25px", maxHeight: "500px", overflowY: "auto" }}>
          <div className='text-xl font-semibold text-black'>Recent Reports</div>
          <div className='flex flex-col gap-4'>
            {recentSightings.map((report, index) => (
              <div key={index} className='flex flex-col gap-2 px-4 py-2' style={{ border: "1px solid #C5C5C5", borderRadius: "5px" }}>
                <div className='text-black text-sm font-light'>Cluster Name</div>
                <div className='text-black text-lg font-semibold'>{report.description}</div>
                <div className='flex gap-4'>
                  <div className='flex gap-3 items-center justify-center'><img src="/assets/msg.svg" alt="Msg" /><div className='text-black'>4</div></div>
                  <div className='flex gap-3 items-center justify-center'><img src="/assets/join.svg" alt="Msg" /><div className='text-black'>2</div></div>
                  {/* <div className='flex gap-3 items-center justify-center' style={{ backgroundColor: "#EBFFF6", padding: "2px 8px", color: "#00C782" }}><img src="/assets/timeimg.svg" alt="Msg" style={{ width: '18px', height: "18px" }} />{Math.floor((Date.now() - new Date(report.timestamp)) / 60000)} Mins Ago</div>
                   */}
                   <div className='flex gap-3 items-center justify-center' style={{ backgroundColor: "#EBFFF6", padding: "2px 8px", color: "#00C782" }}>
  <img src="/assets/timeimg.svg" alt="Msg" style={{ width: '18px', height: "18px" }} />
  {formatTimeDifference(report.timestamp)}
</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardTable;
