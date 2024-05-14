import React, { useState } from 'react'
import Styles from '../signup/page.module.css'

function Reset() {
    const [crtPass, setcrtPass] = useState('');
    const [ConPass, setConPass] = useState('');

    const handleSave = () => {

    }

    const handleLogin = () => {

    }

    return (
    <div className='min-h-screen max-h-screen overflow-hidden flex items-center justify-center' style={{ backgroundColor: "#1B4332" }}>
      <div style={{backgroundColor:"#F5DBC4", borderRadius:"24px"}} className='flex'>
        <div className='bg-white flex items-center justify-center' style={{borderRadius:"24px 0 0 24px"}}>
            <div className='p-8 flex flex-col gap-6 text-sm'>
                <div className='flex flex-col gap-2 mt-2'>
                    <div className='text-3xl font-semibold' style={{ color: '#355B3E' }}>Reset Password !</div>
                    <div style={{ color: "#58745E" }} className='text-sm'>Set up a new password</div>
                </div>
                <div className='flex flex-col gap-2 w-full mt-4'>
                    <label htmlFor="crtPass" style={{ color: "#B9B9B9" }}>Create Password</label>
                    <input style={{color:"#000", border:"none", outline:"none",borderBottom:"1px solid"}} type="password" id="crtPass" value={crtPass} onChange={(e) => setcrtPass(e.target.value)} />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="phoneNumber" style={{ color: "#B9B9B9" }}>Confirm Password</label>
                    <input style={{color:"#000", border:"none", outline:"none",borderBottom:"1px solid"}} type="password" id="phoneNumber" value={ConPass} onChange={(e) => setConPass(e.target.value)} />
                </div>
                <button onClick={handleSave} className={Styles.btn} style={{marginTop:"1em"}}>Save Changes</button>
                <button onClick={handleLogin} className={Styles.btnback} style={{marginTop:"1em"}}>Back to login</button>
            </div>

        </div>
        <div>
            <div className='w-full flex items-center justify-center px-4' style={{height:"100%"}}>
                <img src="/assets/loginlogo.svg" alt="Logo" style={{backgroundColor:"#F5DBC4", width:"30em", height:"30em"}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reset
