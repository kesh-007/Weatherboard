import React from 'react';
import { BiSun } from 'react-icons/bi';
import { FaCloud } from 'react-icons/fa';

function WeatherChart() {
  const data = [
    { msg: 'Now', icon: 1, temp: 27, per: 23 },
    { msg: '11:00', icon: 1, temp: 28, per: 28 },
    { msg: '12:00', icon: 1, temp: 28, per: 42 },
    { msg: '13:00', icon: 0, temp: 26, per: 72 },
    { msg: '14:00', icon: 0, temp: 25, per: 38 },
    { msg: '15:00', icon: 1, temp: 29, per: 58 },
    { msg: '16:00', icon: 1, temp: 29, per: 29 },
  ];

  const maxPercentage = Math.max(...data.map((val) => val.per));

  return (
    <div className="py-1 px-5">
      <div className="flex justify-between ml-7 mr-7 mt-4">
        {data.map((val, index) => (
          <div key={val.msg} className="flex flex-col items-center">
            <div>
              <p>{val.msg}</p>
              {val.icon === 1 && <BiSun size={22} />}
              {val.icon === 0 && <FaCloud size={22} />}
              <p>{val.temp}&#176;</p>
            </div>
            <div className='flex'>
            <div
              className="relative w-4 h-28"
              style={{ borderLeft: '1px solid black', height: '100px' }}
            >
              {val.msg!='16:00' &&
              <div className='w-[13rem] h-[3rem] bg-[#5C9CE5] mt-[2.8rem]  '
              
              />
                }

                
              </div>

            </div>
            <p>{val.per}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherChart;
