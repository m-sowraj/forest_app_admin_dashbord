import React, { useState } from 'react'
import Styles from './report.module.css';
import HomePage from '../../components/NavBar';

function ReportPage() {

  const [reportStatus , setreportStatus] = useState("pending")

  return (
    <div className='flex max-h-screen'>
      <HomePage/>
      <div className={`flex flex-col gap-16 ${Styles.reportDiv}`}>
        <div className={`${Styles.container1}`}>
          <div className={Styles.reportName}>Reports</div>
          <div className={Styles.inpDiv}>
            <div className='flex items-center'>
              <div><img src="/assets/search.svg" alt='Search' width={100} height={100} className={Styles.search}/></div>
              <div>
                <input type="text" className='border-none outline-none px-2' />
              </div>
            </div>
          </div>
          <div className={Styles.notiDiv}><img src="/assets/notify.svg" alt='Notify' width={100} height={100} className={Styles.noti}/></div>
        </div>
        <div className={`${Styles.container2}`}>
          <div className={reportStatus === "pending" ? Styles.reportStatusactive : Styles.reportStatus} onClick={()=>setreportStatus("pending")}>Pending reports</div>
          <div className={reportStatus === "approved" ? Styles.reportStatusactive : Styles.reportStatus} onClick={()=>setreportStatus("approved")}>Approved reports</div>
        </div>

        <div className={`flex flex-wrap gap-4 overflow-scroll ${Styles.allDivs}`}>
          <div className={Styles.eachReport}>
            <div className='flex gap-8 border-b-4 pb-6'>
              <div><img src="/assets/reportimg.svg" alt='Report img' width={100} height={100} className={Styles.reportImg} /></div>
              <div className='flex flex-col gap-2'>
                <div className='font-bold text-xl'>Name</div>
                <div className='font-semibold text-lg'>Cluster name</div>
              </div>
            </div>
            <div className='font-bold pr-2'>There were two elephants in the village X</div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-2'><img src="/assets/cal.svg" alt='Report img' width={100} height={100} className={Styles.cal}/><div>17 mar 2024</div></div>
              <div className='flex gap-2'><img src="/assets/time.svg" alt='Report img' width={100} height={100} className={Styles.time}/><div>01:23 pm</div></div>
            </div>
            <div>I am writing to bring to your immediate attention a critical situation unfolding in [name of the area].......</div>
            <div>
              <div className={`text-center px-4 py-2 mb-2 ${Styles.opt}`}>Accept</div>
              <div className={`text-center px-4 py-2 ${Styles.opt}`}>Decline</div>
            </div>
          </div>
          <div className={Styles.eachReport}>
          <div className='flex gap-8 border-b-4 pb-6'>
            <div><img src="/assets/reportimg.svg" alt='Report img' width={100} height={100} className={Styles.reportImg} /></div>
            <div className='flex flex-col gap-2'>
              <div className='font-bold text-xl'>Name</div>
              <div className='font-semibold text-lg'>Cluster name</div>
            </div>
          </div>
          <div className='font-bold pr-2'>There were two elephants in the village X</div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2'><img src="/assets/cal.svg" alt='Report img' width={100} height={100} className={Styles.cal}/><div>17 mar 2024</div></div>
            <div className='flex gap-2'><img src="/assets/time.svg" alt='Report img' width={100} height={100} className={Styles.time}/><div>01:23 pm</div></div>
          </div>
          <div>I am writing to bring to your immediate attention a critical situation unfolding in [name of the area].......</div>
          <div>
            <div className={`text-center px-4 py-2 mb-2 ${Styles.opt}`}>Accept</div>
            <div className={`text-center px-4 py-2 ${Styles.opt}`}>Decline</div>
          </div>
          </div>
          <div className={Styles.eachReport}>
            <div className='flex gap-8 border-b-4 pb-6'>
              <div><img src="/assets/reportimg.svg" alt='Report img' width={100} height={100} className={Styles.reportImg} /></div>
              <div className='flex flex-col gap-2'>
                <div className='font-bold text-xl'>Name</div>
                <div className='font-semibold text-lg'>Cluster name</div>
              </div>
            </div>
            <div className='font-bold pr-2'>There were two elephants in the village X</div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-2'><img src="/assets/cal.svg" alt='Report img' width={100} height={100} className={Styles.cal}/><div>17 mar 2024</div></div>
              <div className='flex gap-2'><img src="/assets/time.svg" alt='Report img' width={100} height={100} className={Styles.time}/><div>01:23 pm</div></div>
            </div>
            <div>I am writing to bring to your immediate attention a critical situation unfolding in [name of the area].......</div>
            <div>
              <div className={`text-center px-4 py-2 mb-2 ${Styles.opt}`}>Accept</div>
              <div className={`text-center px-4 py-2 ${Styles.opt}`}>Decline</div>
            </div>
          </div>
          <div className={Styles.eachReport}>
            <div className='flex gap-8 border-b-4 pb-6'>
              <div><img src="/assets/reportimg.svg" alt='Report img' width={100} height={100} className={Styles.reportImg} /></div>
              <div className='flex flex-col gap-2'>
                <div className='font-bold text-xl'>Name</div>
                <div className='font-semibold text-lg'>Cluster name</div>
              </div>
            </div>
            <div className='font-bold pr-2'>There were two elephants in the village X</div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-2'><img src="/assets/cal.svg" alt='Report img' width={100} height={100} className={Styles.cal}/><div>17 mar 2024</div></div>
              <div className='flex gap-2'><img src="/assets/time.svg" alt='Report img' width={100} height={100} className={Styles.time}/><div>01:23 pm</div></div>
            </div>
            <div>I am writing to bring to your immediate attention a critical situation unfolding in [name of the area].......</div>
            <div>
              <div className={`text-center px-4 py-2 mb-2 ${Styles.opt}`}>Accept</div>
              <div className={`text-center px-4 py-2 ${Styles.opt}`}>Decline</div>
            </div>
          </div>
          <div className={Styles.eachReport}>
          <div className='flex gap-8 border-b-4 pb-6'>
            <div><img src="/assets/reportimg.svg" alt='Report img' width={100} height={100} className={Styles.reportImg} /></div>
            <div className='flex flex-col gap-2'>
              <div className='font-bold text-xl'>Name</div>
              <div className='font-semibold text-lg'>Cluster name</div>
            </div>
          </div>
          <div className='font-bold pr-2'>There were two elephants in the village X</div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2'><img src="/assets/cal.svg" alt='Report img' width={100} height={100} className={Styles.cal}/><div>17 mar 2024</div></div>
            <div className='flex gap-2'><img src="/assets/time.svg" alt='Report img' width={100} height={100} className={Styles.time}/><div>01:23 pm</div></div>
          </div>
          <div>I am writing to bring to your immediate attention a critical situation unfolding in [name of the area].......</div>
          <div>
            <div className={`text-center px-4 py-2 mb-2 ${Styles.opt}`}>Accept</div>
            <div className={`text-center px-4 py-2 ${Styles.opt}`}>Decline</div>
          </div>
          </div>
          <div className={Styles.eachReport}>
            <div className='flex gap-8 border-b-4 pb-6'>
              <div><img src="/assets/reportimg.svg" alt='Report img' width={100} height={100} className={Styles.reportImg} /></div>
              <div className='flex flex-col gap-2'>
                <div className='font-bold text-xl'>Name</div>
                <div className='font-semibold text-lg'>Cluster name</div>
              </div>
            </div>
            <div className='font-bold pr-2'>There were two elephants in the village X</div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-2'><img src="/assets/cal.svg" alt='Report img' width={100} height={100} className={Styles.cal}/><div>17 mar 2024</div></div>
              <div className='flex gap-2'><img src="/assets/time.svg" alt='Report img' width={100} height={100} className={Styles.time}/><div>01:23 pm</div></div>
            </div>
            <div>I am writing to bring to your immediate attention a critical situation unfolding in [name of the area].......</div>
            <div>
              <div className={`text-center px-4 py-2 mb-2 ${Styles.opt}`}>Accept</div>
              <div className={`text-center px-4 py-2 ${Styles.opt}`}>Decline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportPage
