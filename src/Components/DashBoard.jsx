import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { TiWeatherCloudy } from 'react-icons/ti';
import {BiWind} from 'react-icons/bi'
import { BiCloudRain } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import { WiThermometer } from 'react-icons/wi';
import { WiUmbrella } from 'react-icons/wi';
import { FiMoreHorizontal } from 'react-icons/fi';

import WeatherChart from './WeatherChart';
import { MdKeyboardArrowDown,MdKeyboardArrowRight } from 'react-icons/md';




function DashBoard() {
  
  const anotherdata=[
    {val:0,com:100},
    {val:10,com:70},
    {val:20,com:0},
    {val:30,com:0},
    {val:40,com:0},
    {val:50,com:0},
    {val:60,com:0},
    {val:70,com:0},
    {val:80,com:0},
    {val:90,com:0},
  ]
  const uvindex = [
    {val:'0-2',com:100},
    {val:'3-5',com:60},
    {val:'6-7',com:0},
    {val:'8-10',com:0},
    {val:'11+',com:0},

  ]

  return (
    <div className="rounded-4xl">
      <div className="bg-[#E4F1FF] h-[130vh] w-full rounded-l-[1.9rem] shadow-2xl">
        <div className="flex justify-between ml-[2rem] py-3">
          <div>
            <p className="text-l font-bold">Welcome back Isabella!</p>
            <p className="text-gray-700 text-sm mt-1">Check out today's weather information</p>
          </div>
          <div className="flex cursor-pointer">
            <FiMoreHorizontal size={20}/>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
              className="w-[2rem] h-[2rem] ml-[1rem] rounded-md"
            />
          </div>
        </div>
        <div className="bg-white h-[17rem] p-2 mr-[3rem] ml-[2rem] rounded-[1rem]">
            <div className='flex justify-between '>
                <div className='text-sm'>
                    <p>Upcoming hours</p>
                </div>
                <div className='flex'>
                    <div className='p-2 cursor-pointer bg-gray-200 text-gray-500 rounded-xl mr-4 text-sm flex'>
                        <p>Rain precipation</p>
                        <MdKeyboardArrowDown size={20}/>
                    </div>
                    <div className='p-2 cursor-pointer bg-gray-200  mr-3 rounded-xl text-sm flex'>
                        <p>Next Days</p>
                        <MdKeyboardArrowRight size={20}/>
                    </div>
                </div>

            </div>
            <WeatherChart/>

            
        </div>
        <div className='mt-[2rem] ml-[2rem]'>
                <p className='font-bold text-sm'>More details of today's weather</p>

                <div className='flex justify-between mt-4'>
                    <div className='bg-white h-[9rem] w-[18rem] rounded-3xl py-6 px-3'>
                        <div className='flex justify-between  text-sm'>
                            <p>Humidity</p>
                            <div className='text-sm'>
                            <TiWeatherCloudy size={24} className='bg-[#5C9CE5] text-white' />


                            </div>

                                

                        </div>
                        <p className=' flex text-xl font-bold justify-center'>
                            82% <span className='text-sm text-gray-600 mt-1  ml-1 font-sans'>bad</span>
                        </p>

                        <div className='flex justify-between mt-4 px-3'>
                            <div>
                            <p className='text-[.6rem] text-gray-500'>good</p>
                        <ProgressBar completed={100} height='10px' isLabelVisible={false}  bgColor='#5C9CE5' width='100%'/>
                        </div>
                        <div>
                            <p className='text-[.6rem] text-gray-500'>normal</p>
                        <ProgressBar completed={100} height='10px' isLabelVisible={false}  bgColor='#5C9CE5' width='100%'/>
                        </div>
                        <div>
                            <p className='text-[.6rem] text-gray-500'>bad</p>
                        <ProgressBar completed={40} height='10px' isLabelVisible={false}  bgColor='#5C9CE5' width='100%'/>
                        </div>



                        </div>

                    </div>
                    
                    <div className='bg-white h-[9rem] w-[18rem] rounded-3xl py-4 px-3'>
                        <div className='flex justify-between'>
                        <p>Wind</p>
                        <div>
                        <BiWind size={24} className='bg-[#5C9CE5] text-white' />

                        </div>
                        </div>
                        <Speedometer />
                        
                       

                    </div>
                    <div className='bg-white h-[9rem] w-[18rem] rounded-3xl mr-[3rem] py-4 px-3'>
                        <div className='flex justify-between'>
                            <p>Precipitation</p>
                            <div>
                            <BiCloudRain size={24}  className='bg-[#5C9CE5] text-white'/>

                            </div>

                        </div>
                        <p className=' flex font-bold text-xl mt-3 mb-3 justify-center'>1.4 cm</p>
                        <div className='flex justify-between mt-4 px-3'>
                            {anotherdata.map((val)=>(
                            <div>
                            <p className='text-[.6rem] text-gray-500'>{val.val}</p>
                        <ProgressBar completed={val.com} height='10px' isLabelVisible={false}  bgColor='#5C9CE5' width='100%'/>
                        </div>
                        ))}
                        
                        
                        </div>

                    </div>

                </div>
                <div className='flex justify-between mt-4'>
                    <div className='bg-white h-[9rem] w-[18rem] rounded-3xl py-4 px-3'>
                        <div className='flex justify-between'>
                            <p>UV index</p>
                            <BiSun size={24} className='bg-[#5C9CE5] text-white'/>


                        </div>
                        <p className=' mt-1 justify-center flex text-xl font-bold'>4<span className='text-gray-400  mt-1  ml-1 font-light text-sm '>medium</span></p>
                        <div className='mt-3 flex justify-between px-3'>
                            {uvindex.map((val)=>(
                                <div>
                                                                <p className='text-[.6rem] text-gray-500'>{val.val}</p>
                        <ProgressBar completed={val.com} height='10px' isLabelVisible={false}  bgColor='#5C9CE5' width='100%'/>
                                    </div>
                            ))}

                        </div>

                    </div>
                    <div className='bg-white h-[9rem] w-[18rem] rounded-3xl py-4 px-3'>
                    <div className='flex justify-between'>
                            <p>Feels like</p>
                            <WiThermometer size={24} className='bg-[#5C9CE5] text-white'/>


                        </div>
                        <p className=' mt-2 justify-center flex text-xl font-bold'>30&#176;</p>
                        <div className='mt-3 flex justify-between px-3 text-gray-300 text-sm'>
                            <p>0&#176;</p>
                            <p>25&#176;</p>
                            <p>50&#176;</p>
                            

                        </div>
                        <ProgressBar completed={60} height='10px' isLabelVisible={false}  bgColor='#5C9CE5' width='100%'/>


                    </div>
                    <div className='bg-white h-[9rem] w-[18rem] rounded-3xl py-4 px-3 mr-[3rem]'>
                    <div className='flex justify-between'>
                            <p>Chance of rain</p>
                            <WiUmbrella size={24} className='bg-[#5C9CE5] text-white'/>


                        </div>
                        <p className=' mt-2 justify-center flex text-xl font-bold'>42%</p>
                        <div className='mt-3 flex justify-between px-3 text-gray-300 text-sm mb-'>
                            <p>0%</p>
                            <p>25%</p>
                            <p>50%</p>
                            <p>75%</p>
                            <p>100%</p>
                            

                        </div>
                        <ProgressBar completed={40} height='10px' isLabelVisible={false}  bgColor='#5C9CE5' width='100%'/>


                    </div>

                </div>
            </div>

      </div>
    </div>
  );
}


function Speedometer() {
    const speed = 8;
    const maxSpeed = 40; // Maximum speed value
    const startAngle = 135; // Starting angle for the speedometer scale
    const endAngle = 45; // Ending angle for the speedometer scale
  
    // Calculate the rotation angle for the needle
    const needleRotation = ((speed / maxSpeed) * (startAngle - endAngle) + endAngle) * -1;
  
    return (
      <div className="flex items-center justify-center">
        <svg width="200" height="100">
          {/* Speedometer scale */}
          <path
            d={`M 30 50 A 70 70 0 0 1 170 50`}
            fill="none"
            stroke="gray"
            strokeWidth="3"
            strokeLinecap="round"
          />
  
          {/* Speed values */}
          <text x="30" y="75" textAnchor="start" fontSize="12" fill="gray">
            0
          </text>
          <text x="170" y="75" textAnchor="end" fontSize="12" fill="gray">
            {maxSpeed}
          </text>
  
          {/* Needle */}
          <line
            x1="100"
            y1="50"
            x2="100"
            y2="20"
            transform={`rotate(${needleRotation}, 100, 50)`}
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <p className='font-bold'>8km/h</p> 
      </div>
    );
  }
  
        
    


export default DashBoard;
