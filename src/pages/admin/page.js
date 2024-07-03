import React, { useEffect, useState } from 'react';
import AdminNavBar from '../../components/AdminNavBar';
import AdminHeader from '../../components/AdminHeader';
import ResidentalsCon from './components/ResidentalsCon';
import ResidentailsTable from './components/ResidentailsTable';
import ForestCon from './components/ForestCon';
import ForestTable from './components/ForestTable';
import DashboarCon from './components/DashboarCon';
import DashboardTable from './components/DashboardTable';
import BarChart from './components/BarChart';
import BarChartCon from './components/BarChart';
import PieChartCon from './components/PieChart';
import axios from 'axios';

function AdminPage() {
  // const data = [
  //   {
  //     "Sr.no": 1,
  //     "Name": "Darrell Steward",
  //     "Gender": "Male",
  //     "Date of Registration": "5/19/12",
  //     "Cluster name": "Cluster name"
  //   },
  //   {
  //     "Sr.no": 2,
  //     "Name": "Courtney Henry",
  //     "Gender": "Female",
  //     "Date of Registration": "11/7/16",
  //     "Cluster name": "Cluster name"
  //   },
  //   {
  //     "Sr.no": 3,
  //     "Name": "Robert Fox",
  //     "Gender": "Male",
  //     "Date of Registration": "5/30/14",
  //     "Cluster name": "Cluster name"
  //   },
  //   {
  //     "Sr.no": 4,
  //     "Name": "Eleanor Pena",
  //     "Gender": "Female",
  //     "Date of Registration": "3/4/16",
  //     "Cluster name": "Cluster name"
  //   },
  //   {
  //     "Sr.no": 5,
  //     "Name": "Arlene McCoy",
  //     "Gender": "Female",
  //     "Date of Registration": "2/11/12",
  //     "Cluster name": "Cluster name"
  //   }
  // ];

  // const Requestdata = [
  //   { ID: '#583', Date: '9/23/16', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, 'Cluster name': 'Cluster name', Status: 'Accepted' },
  //   { ID: '#423', Date: '5/7/16', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, 'Cluster name': 'Cluster name', Status: 'Accepted' },
  //   { ID: '#196', Date: '12/10/13', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, 'Cluster name': 'Cluster name', Status: 'Rejected' },
  //   { ID: '#453', Date: '2/11/12', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, 'Cluster name': 'Cluster name', Status: 'Accepted' }
  // ];

  // const Requestdata_ = [
  //   { ID: '#583', Date: '9/23/16', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, Status: 'Accepted' },
  //   { ID: '#423', Date: '5/7/16', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null,Status: 'Accepted' },
  //   { ID: '#196', Date: '12/10/13', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null,Status: 'Rejected' },
  //   { ID: '#453', Date: '2/11/12', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, Status: 'Accepted' }
  // ];

  // const [activeItem, setActiveItem] = useState('Requests');
  const [activeItem, setActiveItem] = useState('Requests');
  const [data, setData] = useState([]);
  const [officerdata, setOfficerdata] = useState([]);

  const [requestData, setRequestData] = useState([]);
  const [requestData_, setRequestData_] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://elephant-tracker-api.onrender.com/api/officers/admin-data');
        setData(response.data.userData);
        setOfficerdata(response.data.officerData)
        setRequestData(response.data.requestData);
        setRequestData_(response.data.requestData_);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex min-h-screen max-h-screen'>
      <AdminNavBar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className='w-full' style={{ backgroundColor: "#D2E4D6", maxHeight: "100vh", overflow: "scroll" }}>
        <div className='w-full flex flex-col gap-6'>
          <AdminHeader />
          {activeItem === 'Requests' && (
            <>
              <div className='flex py-4 mx-4 items-center justify-between'>
                <div className='bg-white px-8 py-4' style={{ borderRadius: "20px", width: '70%' }}>
                  <div className='text-lg font-semibold text-black mb-4'>Report Analysis</div>
                  <BarChartCon />
                </div>
                <div className='bg-white px-12 py-4' style={{ width: "25%", borderRadius: "20px" }}>
                  <div className='text-lg font-semibold text-black mb-4'>Reports</div>
                  <PieChartCon />
                 
                </div>
              </div>
              <DashboarCon />
              <DashboardTable data={requestData} data_={requestData_} />
            </>
          )}

          {activeItem === 'Residentals' && (
            <>
              <ResidentalsCon />
              <ResidentailsTable data={data} />
            </>
          )}
          {activeItem === 'Forest Officials' && (
            <>
              <ForestCon />
              <ForestTable data={officerdata} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
