import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from './report.module.css';
import HomePage from '../../components/NavBar';

function ReportPage() {
  const [reportStatus, setReportStatus] = useState("pending");
  const [reports, setReports] = useState([]);
  const [openReport, setOpenReport] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReports = async (status) => {
    setLoading(true);
    setError(null);
    try {
      const stat = status === "pending" ? "unconfirmed" : "confirmed";
      const response = await axios.get(`https://elephant-tracker-api.onrender.com/api/elephant-sightings/${stat}`);
      
      if (response.data) {
        if (status === "pending") {
          setReports(response.data.unconfirmedSightings || []);
        } else {
          setReports(response.data.confirmedSightings || []);
        }
      } else {
        setError("Unexpected response format.");
      }
    } catch (error) {
      console.error("Error fetching reports:", error);
      setError("Failed to fetch reports. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports(reportStatus);
  }, [reportStatus]);

  const toggleReport = (report) => {
    setSelectedReport(report);
    setOpenReport(!openReport);
  };

  const approveReport = async (reportId) => {
    try {
      await axios.put(`https://elephant-tracker-api.onrender.com/api/elephant-sightings/${reportId}/confirm`,{
        officerId:sessionStorage.getItem('Id'),
        confirmationStatus:"confirmed" ,
        NotificationStatus:  "yes"

      });
      fetchReports(reportStatus);
      toggleReport(null);
    } catch (error) {
      console.error("Error approving report:", error);
      alert("Failed to approve the report. Please try again later.");
    }
  };

  const approveAndNotifyReport = async (reportId) => {
    try {
      await axios.put(`https://elephant-tracker-api.onrender.com/api/elephant-sightings/${reportId}/confirm`,{
        officerId: sessionStorage.getItem('Id'),

        confirmationStatus: "confirmed" ,
        NotificationStatus:  "no"

      });
      fetchReports(reportStatus);
      toggleReport(null);
    } catch (error) {
      console.error("Error approving and notifying report:", error);
      alert("Failed to approve and notify the report. Please try again later.");
    }
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
        {!openReport && (
          <div className={`${Styles.container2}`}>
            <div className={reportStatus === "pending" ? Styles.reportStatusactive : Styles.reportStatus} onClick={() => setReportStatus("pending")}>Pending reports</div>
            <div className={reportStatus === "approved" ? Styles.reportStatusactive : Styles.reportStatus} onClick={() => setReportStatus("approved")}>Approved reports</div>
          </div>
        )}
        {!openReport ? (
          <div className={`flex flex-wrap gap-4 overflow-scroll justify-center ${Styles.allDivs}`}>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div className='text-red-500'>{error}</div>
            ) : reports.length === 0 ? (
              <div>No reports available.</div>
            ) : (
              reports.map((report) => (
                <div key={report._id} className={Styles.eachReport} onClick={() => toggleReport(report)}>
                  <div className='flex gap-8 border-b-4 pb-6'>
                    <div>
                      <img src={report.image_url} alt='Report img' width={100} height={100} className={Styles.reportImg} />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <div className='font-bold text-xl'>{report.confirmed_by?.name || "Unknown"}</div>
                      <div className='font-semibold text-lg'>{report.description}</div>
                    </div>
                  </div>
                  <div className='font-bold pr-2'>{report.description}</div>
                  <div className='flex flex-col gap-4'>
                    <div className='flex gap-2'>
                      <img src="/assets/cal.svg" alt='Report img' width={100} height={100} className={Styles.cal}/>
                      <div>{new Date(report.timestamp).toLocaleDateString()}</div>
                    </div>
                    <div className='flex gap-2'>
                      <img src="/assets/time.svg" alt='Report img' width={100} height={100} className={Styles.time}/>
                      <div>{new Date(report.timestamp).toLocaleTimeString()}</div>
                    </div>
                  </div>
                  <div>{report.description}</div>
                </div>
              ))
            )}
          </div>
        ) : (
          selectedReport && (
            <div className={`${Styles.singleReportContainer}`}>
              <div className={`flex items-center justify-between`}>
                <div className='flex gap-4 items-center'>
                  <div><img src={selectedReport.image_url} alt="Profile" className={`${Styles.SinglereportImg}`}/></div>
                  <div>
                    <div style={{color:"#00C782",fontSize:"20px"}}>#{selectedReport._id}</div>
                    <div className='text-lg font-semibold'>{selectedReport.confirmed_by?.name || "Unknown"}</div>
                    <div className='text-lg'>{selectedReport.description}</div>
                    <div className='text-sm'>{selectedReport.confirmed_by?.phone || "Unknown"}</div>
                  </div>
                </div>
                <div className='flex flex-col justify-between' style={{height:"13vh"}}>
                  <div className='text-lg'>Wild animal - <span style={{color:"#00C782"}}>Elephant</span></div>
                  {reportStatus === "pending" ? (
                    <div className='flex gap-2'>
                      <button
                        style={{color:"white", backgroundColor:"#00C782", padding:"6px 22px", fontSize:"14px" , borderRadius:"8px"}}
                        onClick={() => approveReport(selectedReport._id)}
                      >
                        Approve
                      </button>
                      <button
                        style={{color:"white", backgroundColor:"#00C782", padding:"6px 22px", fontSize:"14px" , borderRadius:"8px"}}
                        onClick={() => approveAndNotifyReport(selectedReport._id)}
                      >
                        Approve and Notify
                      </button>
                    </div>
                  ) : (
                    <div style={{color:"white", backgroundColor:"#00C782", padding:"6px 22px", fontSize:"14px" , borderRadius:"8px"}}>
                      Approved
                    </div>
                  )}
                </div>
              </div>
              <div className='text-2xl font-bold'>{selectedReport.description}</div>
              <div className='flex gap-8'>
                <div className='flex gap-2'><img src="/assets/time.svg" alt="Time" className={Styles.icon} /><div>{new Date(selectedReport.timestamp).toLocaleTimeString()}</div></div>
                <div className='flex gap-2'><img src="/assets/cal.svg" alt="Cal" className={Styles.icon} /><div>{new Date(selectedReport.timestamp).toLocaleDateString()}</div></div>
              </div>
              <div className='text-lg font-light'>Description</div>
              <div>{selectedReport.description}</div>
              <div style={{color:"#00C782", cursor:"pointer" ,border: "1px solid #00C782", padding:"4px 20px", width:"fit-content",}} onClick={() => toggleReport(null)}>Back</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ReportPage;
