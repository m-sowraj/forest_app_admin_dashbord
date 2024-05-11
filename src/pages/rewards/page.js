import React from 'react'
import HomePage from '../../components/NavBar'
import Styles from './page.module.css'

function Rewards() {
  return (
    <div className='min-h-screen max-h-screen flex'>
      <HomePage/>
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
          <div className='flex gap-2 text-3xl items-center'><img src="/assets/rupee.svg" alt="Rupee" className={Styles.rupeeImg}/><div >20 total rewards</div></div>
        </div>
        <div className={Styles.container3}>
          <div className='flex gap-2 text-3xl items-center'><img src="/assets/rupee.svg" alt="Rupee" className={Styles.rupeeImg1}/><div>5</div></div>
          <div className={Styles.won}>You won</div>
          <div className={Styles.desc} style={{color:"#1B4332"}}>For your report No. #20242</div>
          <div className={Styles.shareDiv}><img src="/assets/share.svg" alt="Share" className={Styles.shareImg}/></div>
        </div>
      </div>
    </div>
  )
}

export default Rewards
