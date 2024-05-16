import React from 'react'
import AdminNavBar from '../../components/AdminNavBar'
import AdminHeader from '../../components/AdminHeader'
import ResidentalsCon from './components/ResidentalsCon'

function AdminPage() {
  return (
    <div className='flex min-h-screen max-h-screen'>
      <AdminNavBar/>
      <div className='w-full' style={{backgroundColor:"#D2E4D6"}}>
        <div className='w-full flex flex-col gap-6'>
          <AdminHeader/>
          <ResidentalsCon/>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
