import React, { useEffect } from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import DashBoard from './Components/DashBoard';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  useEffect(()=>{
    toast(
      "This webpage is created by Keshav",
      {
        duration: 3000,
      }
    );
    
  },[])
  return (
    <div className='relative flex' style={{fontFamily:'poppins'}}>
      <Toaster/>
      <SideBar className='h-screen'/>
      <div className='absolute left-[14rem] top-0' style={{ width: 'calc(100% - 14rem)' }}>
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
