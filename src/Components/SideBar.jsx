import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { BsToggle2Off,BsFillSendFill,BsFillSunriseFill,BsSunsetFill } from 'react-icons/bs';
import { CgMore } from 'react-icons/cg';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';



function SideBar() {
  return (
    <div>
        <div className='bg-[#5C9CE5] w-[15.5rem] h-[130vh] '>
            <div className='flex justify-between p-4 '>

                <AiOutlinePlus className='bg-white text-[#5C9CE5] cursor-pointer  rounded'/>
                <CgMore  size={22} className='text-white cursor-pointer'/>
                <div className='flex mr-5 text-white text-sm cursor-wait'>
                &#176;C
                  <BsToggle2Off size={24} className='ml-1 mr-1'/> &#176;F

                </div>

            </div>
            <div className='flex justify-between ml-4 mr-7 mt-[3.5rem]'>
              <div className='text-white text-sm'>
                <div className='flex'>
                <BsFillSendFill className='text-white mr-2'/><span> New York,USA</span></div>
                <p>Today 06 July</p>
              </div>
              <div className='text-white'>
                <div className='flex '>
                  <BsFillSunriseFill className='mr-2 text-white'/>
                  <p>07:19</p>

                </div>
                <div className='flex '>
                  <BsSunsetFill className='mr-2 text-white'/>
                  <p>19:32</p>

                </div>
              </div>
              

            </div>
            <div className='mt-[4rem] text-white flex justify-between mr-7'> 
            <MdKeyboardArrowLeft className='mt-5 text-gray-200' size={28}/>
            <div className=''>
            <p className='text-7xl'>27&#176;</p>
           <div className='flex mt-1'> <BiSun className='mr-1'/> Sunny</div>
            
            </div>
            <MdKeyboardArrowRight className='mt-5 text-gray-200 cursor-pointer' size={28}/>
              

              </div>

        </div>
    </div>
  )
}

export default SideBar