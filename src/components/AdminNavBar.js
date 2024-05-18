import React from 'react';
import Styles from './home.module.css';

function AdminNavBar({ activeItem, setActiveItem }) {
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const navbarItems = [
    { name: 'Requests', image: '/assets/inrequests.svg', inimage: '/assets/requests.svg' },
    { name: 'Residentals', image: '/assets/inresidentals.svg', inimage: '/assets/residentals.svg' },
    { name: 'Forest Officials', image: '/assets/inforest.svg', inimage: '/assets/forest.svg' },
    { name: 'Application', image: '/assets/inapp.svg', inimage: '/assets/app.svg' },
  ];

  return (
    <div className={`${Styles.nav} ${Styles.adminnav} flex flex-col min-h-screen justify-between`}>
      <div className="flex flex-col gap-4">
        <div>
          <img alt='Logo' src="/assets/logo.svg" width={100} height={100} className={Styles.logo} />
        </div>
        <div className='flex items-center justify-between px-4 py-2' style={{ width: "115%", backgroundColor: "#1B4332", borderRadius: "10px" }}>
          <div>DashBoard</div>
          <img src="/assets/dashboard.svg" alt="" />
        </div>
        {navbarItems.map((item) => (
          <div
            key={item.name}
            className={`${Styles.eachDiv} flex gap-4 items-center ${activeItem === item.name ? Styles.active : Styles.options}`}
            onClick={() => handleItemClick(item.name)}
          >
            <div>
              <img src={activeItem === item.name ? item.inimage : item.image} alt='Logos' width={100} height={100} className={Styles.logos} />
            </div>
            <div>
              <div>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-4 px-2 py-4 items-center'>
        <div>
          <img src="/assets/profileimg.svg" alt='Profile' width={100} height={100} className={Styles.profileimg} />
        </div>
        <div className='flex flex-col gap-1'>
          <div className={Styles.name}>Kristin Watson</div>
          <div className={Styles.area}>XYZ Area</div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavBar;
