import React, { useState } from 'react';
import axios from 'axios';
import Styles from './page.module.css';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [options, setOptions] = useState('Forest Official');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!fullName || !phoneNumber || !email || !password || !confirmPassword || !options) {
      setError('Please fill in all fields.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSignUp = async () => {
    if (!validateForm()) {
      return;
    }

    let apiUrl;
    if (options === 'Resident') {
      apiUrl = 'https://elephant-tracker-api.onrender.com/api/officerauth/register';
    } else if (options === 'Forest Official') {
      apiUrl = 'https://elephant-tracker-api.onrender.com/api/officerauth/register';
    }

    try {
      const response = await axios.post(apiUrl, {
        name:fullName,
        phone:phoneNumber,
        email,
        password,
      });

      if (response.data.success) {
        navigate('/login'); 

        console.log('Sign up successful!');
      } else {
        setError(response.data.message || 'Sign up failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className='min-h-screen max-h-screen overflow-hidden flex items-center justify-center' style={{ backgroundColor: "#1B4332" }}>
      <div style={{ backgroundColor: "#F5DBC4", borderRadius: "24px" }} className='flex'>
        <div className='bg-white flex items-center justify-center' style={{ borderRadius: "24px 0 0 24px" }}>
          <div className='p-8 flex flex-col gap-6 text-sm'>
            <div className='flex flex-col gap-2 mt-2'>
              <div className='text-3xl font-semibold' style={{ color: '#355B3E' }}>Welcome !</div>
              <div style={{ color: "#58745E" }} className='text-sm'>Please enter your details to create a new account</div>
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div className='flex flex-col gap-2 w-full mt-4'>
              <label htmlFor="fullName" style={{ color: "#B9B9B9" }}>Full name</label>
              <input style={{ color: "#000", border: "none", outline: "none", borderBottom: "1px solid" }} type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label htmlFor="phoneNumber" style={{ color: "#B9B9B9" }}>Phone number</label>
              <input style={{ color: "#000", border: "none", outline: "none", borderBottom: "1px solid" }} type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label htmlFor="email" style={{ color: "#B9B9B9" }}>Email Address</label>
              <input style={{ color: "#000", border: "none", outline: "none", borderBottom: "1px solid" }} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label htmlFor="password" style={{ color: "#B9B9B9" }}>Create Password</label>
              <input style={{ color: "#000", border: "none", outline: "none", borderBottom: "1px solid" }} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label htmlFor="confirmPassword" style={{ color: "#B9B9B9" }}>Confirm Password</label>
              <input style={{ color: "#000", border: "none", outline: "none", borderBottom: "1px solid" }} type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {/* <div className='flex gap-4' style={{ color: "#277F5E" }}>
              <div>
                <input type="radio" id="res" name="option" value="Resident" checked={options === "Resident"} onChange={(e) => setOptions(e.target.value)} />
                <label htmlFor="res" style={{ padding: "0 0 0 8px" }}>Resident</label>
              </div>
              <div>
                <input type="radio" id="for" name="option" value="Forest Official" checked={options === "Forest Official"} onChange={(e) => setOptions(e.target.value)} />
                <label htmlFor="for" style={{ padding: "0 0 0 8px" }}>Forest Official</label>
              </div>
            </div> */}
            <button onClick={handleSignUp} className={Styles.btn} style={{ marginTop: "1em" }}>Sign Up</button>
          </div>
        </div>
        <div>
          <div className='w-full flex items-center justify-center px-4' style={{ height: "100%" }}>
            <img src="/assets/loginlogo.svg" alt="Logo" style={{ backgroundColor: "#F5DBC4", width: "30em", height: "30em" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
