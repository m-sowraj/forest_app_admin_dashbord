import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import HomePage from '../../components/NavBar';
import MapStyles from './map.module.css';
import Styles from './home.module.css';
import MyMapComponent from '../../components/home/mappopup';
import { useLocation, useNavigate } from 'react-router-dom';


function Home() {

  const navigator = useNavigate();
  
  const [mapOpen, setMapOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null); 
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);
  const maxLength = 250;

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const id = sessionStorage.getItem('Id');
    if (!id) {
      navigator('/login');
    }
  }, []);

  const handleChange = (event) => {
    const inputDescription = event.target.value;
    if (inputDescription.length <= maxLength) {
      setDescription(inputDescription);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleLocationSubmit = (location) => {
    setSelectedLocation(location);
    setMapOpen(false);
  };

  const handleSubmit = async () => {
    if (!selectedFile || !selectedLocation) {
      setErrorMessage('Please select an image and a location.');
      return;
    }

    const formData = new FormData();
    const id = await sessionStorage.getItem('Id');
    formData.append('selectedOption', selectedOption);
    formData.append('description', description);
    formData.append('latitude', selectedLocation?.lat || '');
    formData.append('longitude', selectedLocation?.lng || '');
    formData.append('user_id', id); 
    formData.append('user_type', "Officer");


    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    try {
      const response = await axios.post('https://elephant-tracker-api.onrender.com/api/elephant-sightings', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      // Handle success (e.g., show a success message, reset form, etc.)
      setErrorMessage('');
      setSelectedOption('');
      setDescription('');
      setSelectedLocation(null);
      setSelectedFile(null);
      setPreviewUrl(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show an error message)
      setErrorMessage('Error submitting form, please try again.');
    }
  };

  return (
    <div className='flex max-h-screen overflow-hidden'>
      <HomePage />
      {mapOpen ? 
        <>
          <div className='px-12 py-12 w-full bg-white'>
            <div className={`${Styles.container1}`}>
              <div className={Styles.inpDiv}>
                <div className='flex items-center'>
                  <div><img src="/assets/search.svg" alt='Search' width={100} height={100} className={Styles.search}/></div>
                  <div>
                    <input type="text" className='border-none outline-none px-2 text-black' />
                  </div>
                </div>
              </div>
              <div className={`${Styles.reportName} ${MapStyles.makeReport} px-4 py-2 text-white`} onClick={() => { setMapOpen(!mapOpen) }}>Make a Report</div>
              <div className={Styles.notiDiv}><img src="/assets/notify.svg" alt='Notify' width={100} height={100} className={Styles.noti}/></div>
            </div>
          </div>
        </> : 
        <>
          <div className='flex flex-col gap-8 min-h-screen bg-white w-full'>
            <div className='px-12 py-8 w-full bg-white'>
              <div className={`${Styles.container1}`}>
                <div className={`${Styles.reportName1} text-xl px-4 py-2`} onClick={() => { setMapOpen(!mapOpen) }}>Make a Report</div>
                <div className={Styles.inpDiv1}>
                  <div className='flex items-center'>
                    <div><img src="/assets/search.svg" alt='Search' width={100} height={100} className={Styles.search}/></div>
                    <div>
                      <input type="text" className='border-none outline-none px-2 text-black' />
                    </div>
                  </div>
                </div>
                <div className={Styles.notiDiv}><img src="/assets/notify.svg" alt='Notify' width={100} height={100} className={Styles.noti}/></div>
              </div>
            </div>
            <div className={`px-12 flex items-center w-full justify-center`}>
              <div className={`${Styles.makeareportCon} flex`}>
                <div className={`${Styles.reportCon1} text-black`}>
                  <div className='flex flex-col gap-2'>
                    <div className={`text-black text-3xl ${Styles.newreportTit}`}>Make a New Report</div>
                    <div className={`${Styles.login} pl-1`}>Please login to your account</div>
                  </div>
                  <div className='flex flex-col border-b-2 gap-2'>
                    <label htmlFor="dropdown">Select an option:</label>
                    <select className='border-none outline-none pb-2' id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                      <option className='boreder-none outline-none' value="Elephant">Elephant</option>
                     
                    </select>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="description">Description:</label>
                    <textarea 
                      id="description" 
                      value={description} 
                      onChange={handleChange} 
                      rows={4} 
                      cols={5} 
                      maxLength={maxLength}
                      className={`px-2 py-2 max-h-16 ${Styles.textdiv}`}
                    />
                    <p>{description.length}/{maxLength}</p>
                  </div>
                  <div className='flex flex-col gap-2 cursor-pointer'>
                    <div className={`w-full ${Styles.subbtn}`} onClick={() => setMapOpen(true)}>{selectedLocation ? "Choose again" : "Choose area" }</div>
                    <div className={`w-full ${Styles.backbtn}`} onClick={handleSubmit}>Submit</div>
                  </div>
                  {errorMessage && (
                    <div className='text-red-500'>{errorMessage}</div>
                  )}
                </div>
                <div className={`${Styles.reportCon2}`}>
                  <div>
                    {previewUrl ? (
                      <div className={`flex flex-col items-center justify-center ${Styles.imgDiv1}`}>
                        <img src={previewUrl} alt="Selected" className={Styles.previewImage} />
                        <button 
                          className={`mt-[-45px] ${Styles.uploadbtn}`} 
                          onClick={handleDivClick}
                        >
                          Choose Other
                        </button>
                      </div>
                    ) : (
                      <div className={`flex flex-col items-center justify-center ${Styles.imgDiv1}`}>
                        <img src="/assets/camera.svg" alt="camera" width={100} height={100} className={Styles.cameraimg}/>
                        <div style={{color:"#1B4332"}}>Click a image</div>
                        <div className='text-black text-2xl'>OR</div>
                      <div>
                    <div style={{cursor: 'pointer' }} className={Styles.uploadbtn} onClick={handleDivClick}>
                      Upload Image from Phone
                    </div>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      style={{ display: 'none' }} 
                      onChange={handleFileChange} 
                      accept="image/*"
                    />
                  </div>
                      </div>
                    )}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      }
      <MyMapComponent
        isOpen={mapOpen}
        onClose={() => setMapOpen(false)}
        onSubmit={handleLocationSubmit}
      />
    </div>
  );
}

export default Home;
