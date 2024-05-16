import React from 'react'
import Styles from './home.module.css'

function AdminHeader() {
  return (
    <div className={`${Styles.container1}`}>
        <div className={`${Styles.reportName} flex flex-col gap-0`}><div className='text-xl'>Kristin Watson</div><div className='text-sm'>Welcome back to Kristin 👋</div></div>
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
        <div className={Styles.notiDiv}>
        <img src="/assets/notify.svg" alt='Notify' width={100} height={100} className={Styles.noti}/>
        </div>
    </div>
  )
}

export default AdminHeader
