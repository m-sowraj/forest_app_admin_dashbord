import React from 'react'
import HomePage from '../../components/NavBar'
import Styles from './page.module.css'

function Profile() {
  return (
    <div className='flex min-h-screen max-h-screen'>
      <HomePage/>
      <div className='w-full bg-white p-12'>
        <div className={Styles.container1}>
          <div className={Styles.reportName}>User Profile</div>
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
        <div className='flex gap-8 mt-16'>
          <div className={`flex items-center justify-between max-w- px-8 py-4 ${Styles.container2}`}>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2 items-center justify-center mb-4'> 
                <div><img src="/assets/userprofile.svg" alt="Profile" style={{width:"6em",height:"6em",objectFit:"contain"}}/></div>
                <div className='text-lg font-medium text-black'>Kristin Watson</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-semibold text-black'>Username</div>
                <div className='text-sm font-light text-gray-500'>XaWWE</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-semibold text-black'>Full name </div>
                <div className='text-sm font-light text-gray-500'>Jane Cooper</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-semibold text-black'>Gender</div>
                <div className='text-sm font-light text-gray-500'>Female</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-semibold text-black'>Date of birth</div>
                <div className='text-sm font-light text-gray-500'>13/07/1998</div>
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-semibold text-black'>Address</div>
                <div className='text-sm font-light text-gray-500'>8502 Preston Rd. Inglewood, Maine 98380</div>
              </div>
              <div className={Styles.logout}>
                Log out
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-wrap gap-4'>
              <div className={Styles.userdetailCon}>
                <div className='text-5xl font-semibold mb-2' style={{color:"#075605"}}>15</div>
                <div className='flex gap-4 items-center'> 
                  <div style={{width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"#FBCB0D"}} className='flex items-center justify-center'><img src="/assets/user1.svg" alt="Detail" className={Styles.userimgs}/></div>
                  <div className='text-lg font-normal' style={{color:"#075605",width:"5em"}}>Total Reports</div>
                </div>
              </div>
              <div className={Styles.userdetailCon}>
                <div className='text-5xl font-semibold mb-2' style={{color:"#075605"}}>11</div>
                <div className='flex gap-4 items-center'> 
                  <div style={{width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"#00C782"}} className='flex items-center justify-center'><img src="/assets/user2.svg" alt="Detail" className={Styles.userimgs}/></div>
                  <div className='text-lg font-normal' style={{color:"#075605",width:"5em"}}>Valid Reports</div>
                </div>
              </div>
              <div className={Styles.userdetailCon}>
                <div className='text-5xl font-semibold mb-2' style={{color:"#075605"}}>4</div>
                <div className='flex gap-4 items-center'> 
                  <div style={{width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"#FF0000"}} className='flex items-center justify-center'><img src="/assets/user3.svg" alt="Detail" className={Styles.userimgs}/></div>
                  <div className='text-lg font-normal' style={{color:"#075605",width:"5em"}}>Pending Reports</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
