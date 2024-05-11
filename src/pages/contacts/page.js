import React from 'react'
import Styles from './contact.module.css'
import HomePage from '../../components/NavBar'

function Contacts() {
  return (
    <div className='flex'>
      <HomePage/>
      <div className={`flex flex-col ${Styles.contactDiv}`}>
        
      </div>
    </div>
  )
}

export default Contacts
