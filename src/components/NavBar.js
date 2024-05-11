import React, { useState } from 'react';
import Styles from './home.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  const navigator = useNavigate();
  const [active, setActive] = useState("");

  const handleItemClick = (href) => {
    navigator(href);
    setActive(href);
  };

  const navbarItems = [
    { name: 'Home', href: '/', image: '/assets/home.svg', inimage: '/assets/inhome.svg' },
    { name: 'Reports', href: '/reports', image: '/assets/report.svg', inimage: '/assets/inreports.svg' },
    { name: 'Contacts', href: '/contacts', image: '/assets/contact.svg', inimage: '/assets/incontacts.svg' },
    { name: 'Rewards', href: '/rewards', image: '/assets/reward.svg', inimage: '/assets/inrewards.svg' },
    { name: 'Profile', href: '/profile', image: '/assets/profile.svg', inimage: '/assets/inprofile.svg' },
    { name: 'Admin Panel', href: '/admin', image: '/assets/admin.svg', inimage: '/assets/inadmin.svg' }
  ];

  return (
    <div className={`${Styles.nav} flex flex-col min-h-screen justify-between`}>
      <div className="flex flex-col gap-4">
        <div><img alt='Logo' src="/assets/logo.svg" width={100} height={100} className={Styles.logo} /></div>
        {navbarItems.map((item) => (
          <div
            key={item.name}
            className={`${Styles.eachDiv} flex gap-4 items-center ${location.pathname === item.href ? Styles.active : Styles.options}`}
            onClick={() => handleItemClick(item.href)}
          >
            <div><img src={location.pathname === item.href ? item.inimage : item.image} alt='Logos' width={100} height={100} className={Styles.logos} /></div>
            <div>
              <div>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-4 px-2 py-4 items-center'>
        <div><img src="/assets/profileimg.svg" alt='Profile' width={100} height={100} className={Styles.profileimg} /></div>
        <div className='flex flex-col gap-1'>
          <div className={Styles.name}>Kristin Watson</div>
          <div className={Styles.area}>XYZ Area</div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
