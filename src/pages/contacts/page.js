import React, { useState } from 'react'
import Styles from './contact.module.css'
import HomePage from '../../components/NavBar'

function Contacts() {

  const [contactStatus , setcontactStatus] = useState("nearby")

  return (
    <div className='flex'>
      <HomePage/>
      <div className={`flex flex-col ${Styles.contactDiv}`}>
        <div className={`${Styles.container1}`}>
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
        <div className={`${Styles.container2}`}>
          <div className={contactStatus === "nearby" ? Styles.contactStatusactive : Styles.contactStatus} onClick={()=>setcontactStatus("nearby")}>Near by</div>
          <div className={contactStatus === "all" ? Styles.contactStatusactive : Styles.contactStatus} onClick={()=>setcontactStatus("all")}>All</div>
        </div>
        <div className={`${Styles.container3}`}>
          <div className={`${Styles.eachcontactDiv} flex flex-col gap-2 m-4`}>
            <div className='flex gap-4 items-center px-4 py-2 pb-4 border-b-2'>
              <div><img src="/assets/contactprofile.svg" alt="Profile" className={Styles.profilePic}/></div>
              <div>
                <div>Bessie Cooper</div>
                <div className='text-sm/3'>Department name</div>
              </div>
            </div>
            <div className='flex flex-col gap-4 justify-start pl-4 pt-4'>
              <div className='flex gap-2'><img src="/assets/phoneimg.svg" alt="Phone" className={Styles.icon} /><div className='text-sm'>(480) 555-0103</div></div>
              <div className='flex gap-2'><img src="/assets/pinimg.svg" alt="Pin" className={Styles.icon} /><div className='text-sm'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div></div>
            </div>
          </div>
          <div className={`${Styles.eachcontactDiv} flex flex-col gap-2 m-4`}>
            <div className='flex gap-4 items-center px-4 py-2 pb-4 border-b-2'>
              <div><img src="/assets/contactprofile.svg" alt="Profile" className={Styles.profilePic}/></div>
              <div>
                <div>Bessie Cooper</div>
                <div className='text-sm/3'>Department name</div>
              </div>
            </div>
            <div className='flex flex-col gap-4 justify-start pl-4 pt-4'>
              <div className='flex gap-2'><img src="/assets/phoneimg.svg" alt="Phone" className={Styles.icon} /><div className='text-sm'>(480) 555-0103</div></div>
              <div className='flex gap-2'><img src="/assets/pinimg.svg" alt="Pin" className={Styles.icon} /><div className='text-sm'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div></div>
            </div>
          </div>
          <div className={`${Styles.eachcontactDiv} flex flex-col gap-2 m-4`}>
            <div className='flex gap-4 items-center px-4 py-2 pb-4 border-b-2'>
              <div><img src="/assets/contactprofile.svg" alt="Profile" className={Styles.profilePic}/></div>
              <div>
                <div>Bessie Cooper</div>
                <div className='text-sm/3'>Department name</div>
              </div>
            </div>
            <div className='flex flex-col gap-4 justify-start pl-4 pt-4'>
              <div className='flex gap-2'><img src="/assets/phoneimg.svg" alt="Phone" className={Styles.icon} /><div className='text-sm'>(480) 555-0103</div></div>
              <div className='flex gap-2'><img src="/assets/pinimg.svg" alt="Pin" className={Styles.icon} /><div className='text-sm'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div></div>
            </div>
          </div>
          <div className={`${Styles.eachcontactDiv} flex flex-col gap-2 m-4`}>
            <div className='flex gap-4 items-center px-4 py-2 pb-4 border-b-2'>
              <div><img src="/assets/contactprofile.svg" alt="Profile" className={Styles.profilePic}/></div>
              <div>
                <div>Bessie Cooper</div>
                <div className='text-sm/3'>Department name</div>
              </div>
            </div>
            <div className='flex flex-col gap-4 justify-start pl-4 pt-4'>
              <div className='flex gap-2'><img src="/assets/phoneimg.svg" alt="Phone" className={Styles.icon} /><div className='text-sm'>(480) 555-0103</div></div>
              <div className='flex gap-2'><img src="/assets/pinimg.svg" alt="Pin" className={Styles.icon} /><div className='text-sm'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div></div>
            </div>
          </div>
          <div className={`${Styles.eachcontactDiv} flex flex-col gap-2 m-4`}>
            <div className='flex gap-4 items-center px-4 py-2 pb-4 border-b-2'>
              <div><img src="/assets/contactprofile.svg" alt="Profile" className={Styles.profilePic}/></div>
              <div>
                <div>Bessie Cooper</div>
                <div className='text-sm/3'>Department name</div>
              </div>
            </div>
            <div className='flex flex-col gap-4 justify-start pl-4 pt-4'>
              <div className='flex gap-2'><img src="/assets/phoneimg.svg" alt="Phone" className={Styles.icon} /><div className='text-sm'>(480) 555-0103</div></div>
              <div className='flex gap-2'><img src="/assets/pinimg.svg" alt="Pin" className={Styles.icon} /><div className='text-sm'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div></div>
            </div>
          </div>
          <div className={`${Styles.eachcontactDiv} flex flex-col gap-2 m-4`}>
            <div className='flex gap-4 items-center px-4 py-2 pb-4 border-b-2'>
              <div><img src="/assets/contactprofile.svg" alt="Profile" className={Styles.profilePic}/></div>
              <div>
                <div>Bessie Cooper</div>
                <div className='text-sm/3'>Department name</div>
              </div>
            </div>
            <div className='flex flex-col gap-4 justify-start pl-4 pt-4'>
              <div className='flex gap-2'><img src="/assets/phoneimg.svg" alt="Phone" className={Styles.icon} /><div className='text-sm'>(480) 555-0103</div></div>
              <div className='flex gap-2'><img src="/assets/pinimg.svg" alt="Pin" className={Styles.icon} /><div className='text-sm'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div></div>
            </div>
          </div>
          <div className={`${Styles.eachcontactDiv} flex flex-col gap-2 m-4`}>
            <div className='flex gap-4 items-center px-4 py-2 pb-4 border-b-2'>
              <div><img src="/assets/contactprofile.svg" alt="Profile" className={Styles.profilePic}/></div>
              <div>
                <div>Bessie Cooper</div>
                <div className='text-sm/3'>Department name</div>
              </div>
            </div>
            <div className='flex flex-col gap-4 justify-start pl-4 pt-4'>
              <div className='flex gap-2'><img src="/assets/phoneimg.svg" alt="Phone" className={Styles.icon} /><div className='text-sm'>(480) 555-0103</div></div>
              <div className='flex gap-2'><img src="/assets/pinimg.svg" alt="Pin" className={Styles.icon} /><div className='text-sm'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div></div>
            </div>
          </div>
          <div className={`${Styles.eachcontactDiv} flex flex-col gap-2 m-4`}>
            <div className='flex gap-4 items-center px-4 py-2 pb-4 border-b-2'>
              <div><img src="/assets/contactprofile.svg" alt="Profile" className={Styles.profilePic}/></div>
              <div>
                <div>Bessie Cooper</div>
                <div className='text-sm/3'>Department name</div>
              </div>
            </div>
            <div className='flex flex-col gap-4 justify-start pl-4 pt-4'>
              <div className='flex gap-2'><img src="/assets/phoneimg.svg" alt="Phone" className={Styles.icon} /><div className='text-sm'>(480) 555-0103</div></div>
              <div className='flex gap-2'><img src="/assets/pinimg.svg" alt="Pin" className={Styles.icon} /><div className='text-sm'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contacts
