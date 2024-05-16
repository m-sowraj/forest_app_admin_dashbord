import React from 'react';
import styles from './table.module.css';

const Grid = ({ data }) => {
  const columns = ['ID', 'Date', 'Report description', 'Photo', 'Cluster name', 'Status'];

  return (
    <div className='flex flex-col pl-4 pt-4 mt-4' style={{backgroundColor:"#F3FFF6"}}>
        <div className='text-xl font-semibold text-black'>Submitted Reports</div>
        <div className={styles.gridContainer} style={{color:"#000"}}>
            <div className={styles.gridHeader}>
                {columns.map((col) => (
                <div key={col} className={`${styles.gridItem} ${styles.header}`}>{col}</div>
                ))}
            </div>
            <div className={styles.gridBody}>
                {data.map((row, index) => (
                <div key={index} className={styles.gridRow}>
                    {columns.map((col) => (
                    <div key={col} className={styles.gridItem}>
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
  );
};

export default Grid;
