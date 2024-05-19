import React, { useState } from 'react';
import AdminNavBar from '../../components/AdminNavBar';
import AdminHeader from '../../components/AdminHeader';
import ResidentalsCon from './components/ResidentalsCon';
import ResidentailsTable from './components/ResidentailsTable';
import ForestCon from './components/ForestCon';
import ForestTable from './components/ForestTable';
import DashboarCon from './components/DashboarCon';
import DashboardTable from './components/DashboardTable';

function AdminPage() {
  const data = [
    {
      "Sr.no": 1,
      "Name": "Darrell Steward",
      "Gender": "Male",
      "Date of Registration": "5/19/12",
      "Cluster name": "Cluster name"
    },
    {
      "Sr.no": 2,
      "Name": "Courtney Henry",
      "Gender": "Female",
      "Date of Registration": "11/7/16",
      "Cluster name": "Cluster name"
    },
    {
      "Sr.no": 3,
      "Name": "Robert Fox",
      "Gender": "Male",
      "Date of Registration": "5/30/14",
      "Cluster name": "Cluster name"
    },
    {
      "Sr.no": 4,
      "Name": "Eleanor Pena",
      "Gender": "Female",
      "Date of Registration": "3/4/16",
      "Cluster name": "Cluster name"
    },
    {
      "Sr.no": 5,
      "Name": "Arlene McCoy",
      "Gender": "Female",
      "Date of Registration": "2/11/12",
      "Cluster name": "Cluster name"
    }
  ];

  const Requestdata = [
    { ID: '#583', Date: '9/23/16', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, 'Cluster name': 'Cluster name', Status: 'Accepted' },
    { ID: '#423', Date: '5/7/16', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, 'Cluster name': 'Cluster name', Status: 'Accepted' },
    { ID: '#196', Date: '12/10/13', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, 'Cluster name': 'Cluster name', Status: 'Rejected' },
    { ID: '#453', Date: '2/11/12', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, 'Cluster name': 'Cluster name', Status: 'Accepted' }
  ];

  const Requestdata_ = [
    { ID: '#583', Date: '9/23/16', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, Status: 'Accepted' },
    { ID: '#423', Date: '5/7/16', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null,Status: 'Accepted' },
    { ID: '#196', Date: '12/10/13', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null,Status: 'Rejected' },
    { ID: '#453', Date: '2/11/12', "Name Of Reporter": "James" ,'Report description': 'Report description', Photo: null, Status: 'Accepted' }
  ];

  const [activeItem, setActiveItem] = useState('Requests');

  return (
    <div className='flex min-h-screen max-h-screen'>
      <AdminNavBar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className='w-full' style={{ backgroundColor: "#D2E4D6",maxHeight:"100vh",overflow:"scroll" }}>
        <div className='w-full flex flex-col gap-6'>
          <AdminHeader />
          {activeItem === 'Requests' && (
            <>
              <DashboarCon />
              <DashboardTable data={Requestdata} data_={Requestdata_} />
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
              <ForestTable data={data} />
            </>
          )}
          {/* Add other conditions for 'Requests' and 'Application' if needed */}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
