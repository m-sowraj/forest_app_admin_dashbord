import React, { useState } from 'react';
import Styles from './report.module.css';
import HomePage from '../../components/NavBar';

function ReportPage() {
  const [reportStatus, setReportStatus] = useState("pending");
  const [openReport, setOpenReport] = useState(false);

  const toggleReport = () => {
    setOpenReport(!openReport);
  };

  return (
    <div className='flex max-h-screen'>
      <HomePage />
      <div className={`flex flex-col gap-16 ${Styles.reportDiv}`}>
        <div className={`${Styles.container1}`}>
          <div className={Styles.reportName}>Reports</div>
          {!openReport && (
            <div className={Styles.inpDiv}>
              <div className='flex items-center'>
                <div>
                  <img src="/assets/search.svg" alt='Search' width={100} height={100} className={Styles.search}/>
                </div>
                <div>
                  <input type="text" className='border-none outline-none px-2' />
                </div>
              </div>
            </div>
          )}
          <div className={Styles.notiDiv}>
            <img src="/assets/notify.svg" alt='Notify' width={100} height={100} className={Styles.noti}/>
          </div>
        </div>
        {
          !openReport && (
            <div className={`${Styles.container2}`}>
              <div className={reportStatus === "pending" ? Styles.reportStatusactive : Styles.reportStatus} onClick={() => setReportStatus("pending")}>Pending reports</div>
              <div className={reportStatus === "approved" ? Styles.reportStatusactive : Styles.reportStatus} onClick={() => setReportStatus("approved")}>Approved reports</div>
            </div>
          )
        }
        {!openReport ? (
          <div className={`flex flex-wrap gap-4 overflow-scroll justify-center ${Styles.allDivs}`}>
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className={Styles.eachReport} onClick={toggleReport}>
                <div className='flex gap-8 border-b-4 pb-6'>
                  <div>
                    <img src="/assets/reportimg.svg" alt='Report img' width={100} height={100} className={Styles.reportImg} />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='font-bold text-xl'>Name</div>
                    <div className='font-semibold text-lg'>Cluster name</div>
                  </div>
                </div>
                <div className='font-bold pr-2'>There were two elephants in the village X</div>
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-2'>
                    <img src="/assets/cal.svg" alt='Report img' width={100} height={100} className={Styles.cal}/>
                    <div>17 mar 2024</div>
                  </div>
                  <div className='flex gap-2'>
                    <img src="/assets/time.svg" alt='Report img' width={100} height={100} className={Styles.time}/>
                    <div>01:23 pm</div>
                  </div>
                </div>
                <div>I am writing to bring to your immediate attention a critical situation unfolding in [name of the area].......</div>
                <div>
                  <div className={`text-center px-4 py-2 mb-2 ${Styles.opt}`}>Accept</div>
                  <div className={`text-center px-4 py-2 ${Styles.opt}`}>Decline</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`${Styles.singleReportContainer}`}>
            <div className={`flex items-center justify-between`}>
              <div className='flex gap-4 items-center'>
                <div><img src="/assets/reportimg1.svg" alt="Profile" className={`${Styles.SinglereportImg}`}/></div>
                <div>
                  <div style={{color:"#00C782",fontSize:"20px"}}>#20241</div>
                  <div className='text-lg font-semibold'>Esther Howard</div>
                  <div className='text-lg'>Cluster name</div>
                  <div className='text-sm'>90547688XX</div>
                </div>
              </div>
              <div className='flex flex-col justify-between' style={{height:"13vh"}}>
                  <div className='text-lg'>Wild animal - <span style={{color:"#00C782"}}>Elephant</span></div>
                  <div style={{color:"white",backgroundColor:"#00C782", padding:"6px 22px", fontSize:"14px" , borderRadius:"8px"}}>Approved and Notified</div>
              </div>
            </div>
            <div className='text-2xl font-bold'>There were two elephants in the village X</div>
            <div className='flex gap-8'>
              <div className='flex gap-2'><img src="/assets/time.svg" alt="Time" className={Styles.icon} /><div>01:23 pm</div></div>
              <div className='flex gap-2'><img src="/assets/cal.svg" alt="Cal" className={Styles.icon} /><div>17 mar 2024</div></div>
            </div>
            <div className='text-lg font-light'>Description</div>
            <div>
              The villagers of village X encountered two elephants while walking around the village The elephants were calm and peaceful, but they caused the villagers to fear for their lives. The villagers quickly ran away from the elephants, not knowing what to do.The elephants were calm and peaceful, but they caused the villagers to fear for their lives.
            </div>
            <div style={{color:"#00C782", cursor:"pointer" ,border: "1px solid #00C782", padding:"4px 20px", width:"fit-content",}} onClick={toggleReport}>Back</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportPage
