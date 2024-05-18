import React from 'react'
import styles from './table.module.css'

function ResidentailsTable({data}) {

    const columns = ['Sr.no', 'Name', 'Gender', 'Date of Registration', 'Cluster name'];

    return (
    <div className='flex flex-col pl-4 py-8 mt-4' style={{ backgroundColor: "#F3FFF6", margin:"2em 1em",borderRadius:"20px" }}>
      <div className='text-xl font-semibold text-black' style={{paddingLeft:"3.75em"}}>List of Residentals</div>
      <div className={styles.gridContainer} style={{ color: "#000" }}>
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
                  {row[col]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResidentailsTable
