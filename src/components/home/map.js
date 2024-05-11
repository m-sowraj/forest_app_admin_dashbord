"use client"
import React from 'react';
import Styles from '@/app/reports/report.module.css'
import Image from 'next/image';
import MapStlyes from './map.module.css'
import { useRouter } from 'next/navigation';

function HomeMapCon() {

    const router = useRouter();
    return (
    <div className='px-12 py-12 w-full bg-white'>
        <div className={`${Styles.container1}`}>
          <div className={Styles.inpDiv}>
            <div className='flex items-center'>
              <div><Image src="/assets/search.svg" alt='Search' width={100} height={100} className={Styles.search}/></div>
              <div>
                <input type="text" className='border-none outline-none px-2 text-black' />
              </div>
            </div>
          </div>
          <div className={`${Styles.reportName} ${MapStlyes.makeReport} px-4 py-2 text-white`} onClick={()=>{}}>Make a Report</div>
          <div className={Styles.notiDiv}><Image src="/assets/notify.svg" alt='Notify' width={100} height={100} className={Styles.noti}/></div>
        </div>
    </div>
  )
}

export default HomeMapCon
