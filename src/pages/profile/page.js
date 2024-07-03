import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from '../../components/NavBar';
import Styles from './page.module.css';
import Grid from './components/Table';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [reports, setReports] = useState([]);
  const [acceptedReports, setAcceptedReports] = useState(0);
  const [notAcceptedReports, setNotAcceptedReports] = useState(0);

  useEffect(() => {
    // Replace 'USER_ID' with the actual user ID or fetch it dynamically
    const userId = '662bd6a5c7bb26949f85185c';

    // Fetch user data and reports
    axios.post('https://elephant-tracker-api.onrender.com/api/users/reports', { user_id: userId })
      .then(response => {
        const { user, total_reports, accepted_reports, not_accepted_reports, reports } = response.data;
        setUserData(user);
        setReports(reports);
        setAcceptedReports(accepted_reports);
        setNotAcceptedReports(not_accepted_reports);
      })
      .catch(error => {
        console.error('Error fetching user reports:', error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { fullname, email, phone_num } = userData;

  return (
    <div className='flex min-h-screen max-h-screen'>
      <HomePage />
      <div className='w-full bg-white p-12'>
        <div className={Styles.container1}>
          <div className={Styles.reportName}>User Profile</div>
          <div className={Styles.inpDiv}>
            <div className='flex items-center'>
              <div>
                <img src="/assets/search.svg" alt='Search' width={100} height={100} className={Styles.search} />
              </div>
              <div>
                <input type="text" className='border-none outline-none px-2' />
              </div>
            </div>
          </div>
          <div className={Styles.notiDiv}>
            <img src="/assets/notify.svg" alt='Notify' width={100} height={100} className={Styles.noti} />
          </div>
        </div>
        <div className='flex gap-8 mt-16'>
          <div className={`flex items-center justify-between max-w- px-8 py-4 ${Styles.container2}`}>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2 items-center justify-center mb-4'>
                <div>
                  <img src="/assets/userprofile.svg" alt="Profile" style={{ width: "6em", height: "6em", objectFit: "contain" }} />
                </div>
                <div className='text-lg font-medium text-black'>{fullname}</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-semibold text-black'>Email</div>
                <div className='text-sm font-light text-gray-500'>{email}</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-semibold text-black'>Phone Number</div>
                <div className='text-sm font-light text-gray-500'>{phone_num}</div>
              </div>
              <div className={Styles.logout}>
                Log out
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-wrap gap-4'>
              <div className={Styles.userdetailCon}>
                <div className='text-5xl font-semibold mb-2' style={{ color: "#075605" }}>{reports.length}</div>
                <div className='flex gap-4 items-center'>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#FBCB0D" }} className='flex items-center justify-center'>
                    <img src="/assets/user1.svg" alt="Detail" className={Styles.userimgs} />
                  </div>
                  <div className='text-lg font-normal' style={{ color: "#075605", width: "5em" }}>Total Reports</div>
                </div>
              </div>
              <div className={Styles.userdetailCon}>
                <div className='text-5xl font-semibold mb-2' style={{ color: "#075605" }}>{acceptedReports}</div>
                <div className='flex gap-4 items-center'>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#00C782" }} className='flex items-center justify-center'>
                    <img src="/assets/user2.svg" alt="Detail" className={Styles.userimgs} />
                  </div>
                  <div className='text-lg font-normal' style={{ color: "#075605", width: "5em" }}>Valid Reports</div>
                </div>
              </div>
              <div className={Styles.userdetailCon}>
                <div className='text-5xl font-semibold mb-2' style={{ color: "#075605" }}>{notAcceptedReports}</div>
                <div className='flex gap-4 items-center'>
                  <div style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#FF0000" }} className='flex items-center justify-center'>
                    <img src="/assets/user3.svg" alt="Detail" className={Styles.userimgs} />
                  </div>
                  <div className='text-lg font-normal' style={{ color: "#075605", width: "5em" }}>Non accepted Reports</div>
                </div>
              </div>
            </div>
            <div>
              <Grid data={reports.map(report => ({
                ID: `#${report._id}`,
                Date: new Date(report.timestamp).toLocaleDateString(),
                'Report description': report.description,
                Photo: report.image_url,
                'Cluster name': 'Cluster name', // Assuming this needs to be dynamically fetched or modified based on your logic
                Status: report.confirmed ? 'Accepted' : 'Rejected'
              }))} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
