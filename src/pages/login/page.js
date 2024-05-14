import React, { useState } from 'react'
import Styles from '../signup/page.module.css'
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {

    }

    const handleCreate = () => {
        navigate("/signup")
    }

  return (
    <div className='min-h-screen max-h-screen overflow-hidden flex items-center justify-center' style={{ backgroundColor: "#1B4332" }}>
      <div style={{backgroundColor:"#F5DBC4", borderRadius:"24px"}} className='flex'>
        <div className='bg-white flex items-center justify-center' style={{borderRadius:"24px 0 0 24px"}}>
            <div className='p-8 flex flex-col gap-6 text-sm'>
                <div className='flex flex-col gap-2 mt-2'>
                    <div className='text-3xl font-semibold' style={{ color: '#355B3E' }}>Welcome !</div>
                    <div style={{ color: "#58745E" }} className='text-sm'>Please enter your details to create a new account</div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="phoneNumber" style={{ color: "#B9B9B9" }}>Phone number</label>
                    <input style={{color:"#000", border:"none", outline:"none",borderBottom:"1px solid"}} type="number" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="password" style={{ color: "#B9B9B9" }}>Password</label>
                    <input style={{color:"#000", border:"none", outline:"none",borderBottom:"1px solid"}} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleSignUp} className={Styles.btn} style={{marginTop:"1em"}}>Login</button>
                <button onClick={handleCreate} className={Styles.btnback} style={{marginTop:"1em"}}>Create an Account</button>
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

export default SignIn
