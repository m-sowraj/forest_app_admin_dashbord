import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from '../../components/NavBar';
import Styles from './page.module.css';

function Rewards() {
  const [rewards, setRewards] = useState([]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = date.toLocaleString('default', { month: 'short' }); // Get short month name
    const day = date.getDate(); // Get date
    return `${month} ${day}`; // Concatenate month and date
  };
  

  useEffect(() => {
    const fetchRewards = async () => {
      try {
        const response = await axios.get('https://elephant-tracker-api.onrender.com/api/rewards/user/662bd6a5c7bb26949f85185c');

        setRewards(response.data.rewards);
      } catch (error) {
        console.error('Error fetching rewards:', error);
        alert(`Error fetching rewards: ${error.message}`);
      }
    };

    fetchRewards();
  }, []);

  return (
    <div className='min-h-screen max-h-screen flex'>
      <HomePage />
      <div className={Styles.rewardPage}>
        <div className={Styles.container1}>
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
        <div className={Styles.container2}>
          <div className='flex gap-2 text-3xl items-center'>
            {/* <img src="/assets/rupee.svg" alt="Rupee" className={Styles.rupeeImg}/> */}
            <div>{rewards.length} total rewards</div>
          </div>
        </div>
        <div className={Styles.rewardsList}>
          {rewards.map((reward) => (
            <div key={reward._id} className={Styles.container3}>
              <div className='flex gap-2 text-3xl items-center'>
                <img src="/assets/rupee.svg" alt="Rupee" className={Styles.rupeeImg1}/>
                <div>{reward.points}</div>
              </div>
              <div className={Styles.won}>You won</div>
              <div className={Styles.desc} style={{color:"#1B4332"}}>For your report On {formatDate(reward.timestamp)}</div>
              <div className={Styles.shareDiv}><img src="/assets/share.svg" alt="Share" className={Styles.shareImg}/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rewards;
