import React from 'react'

function ResidentalsCon() {
  return (
        <div className="flex flex-wrap gap-4 pl-4">
            <div className="flex flex-col justify-between p-8 bg-white text-black w-80 gap-4" style={{borderRadius:"25px"}}>
                <div className='flex gap-3'><div className='flex gap-2 items-center justify-center' style={{width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"#72A2FF"}}><img src="/assets/userlogo.svg" alt="User" /></div><div className='font-light text-xl w-14'>Total Users</div></div>
                <div className='w-full items-center justify-between flex '>
                    <div className='text-lg font-medium'>57</div>
                    <div style={{color:"#2CDA91",backgroundColor:"#9FFFD6",fontSize:"12px",padding:"4px 6px",borderRadius:"5px"}}>0.5%</div>
                </div>
                <div className='text-sm'><span style={{color:"#2CDA91"}}>10%</span> increase Of Total Users</div>
            </div>
            <div className="flex flex-col justify-between p-8 bg-white text-black w-80 gap-4" style={{borderRadius:"25px"}}>
                <div className='flex gap-3'><div className='flex gap-2 items-center justify-center' style={{width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"#FBCB0D"}}><img src="/assets/residentallogo.svg" alt="User" /></div><div className='font-light text-xl w-14'>Total Users</div></div>
                <div className='w-full items-center justify-between flex '>
                    <div className='text-lg font-medium'>57</div>
                    <div style={{color:"#2CDA91",backgroundColor:"#9FFFD6",fontSize:"12px",padding:"4px 6px",borderRadius:"5px"}}>0.5%</div>
                </div>
                <div className='text-sm'><span style={{color:"#2CDA91"}}>14%</span> increase Of Total Users</div>
            </div>
            <div className="flex flex-col justify-between p-8 bg-white text-black w-80 gap-4" style={{borderRadius:"25px"}}>
                <div className='flex gap-3'><div className='flex gap-2 items-center justify-center' style={{width:"50px",height:"50px",borderRadius:"50%",backgroundColor:"#00C782"}}><img src="/assets/forestlogo.svg" alt="User" /></div><div className='font-light text-xl w-14'>Total Users</div></div>
                <div className='w-full items-center justify-between flex '>
                    <div className='text-lg font-medium'>57</div>
                    <div style={{color:"#FF0000",backgroundColor:"#FFC5C6",fontSize:"12px",padding:"4px 6px",borderRadius:"5px"}}>0.5%</div>
                </div>
                <div className='text-sm'><span style={{color:"#2CDA91"}}>15%</span> increase Of Total Users</div>
            </div>
        </div>
  )
}

export default ResidentalsCon
