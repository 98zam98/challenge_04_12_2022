import React, { useState } from 'react'
import Day from './Day';

const left_limit = 850;
const right_limit = -left_limit;

const lift_step = 50;
const Schedule = () => {
  const [Left, setLeft] = useState(left_limit);
  return (
    <div className='Schedule' >

      <div className='header_font2 w_Schedule' >Schedule</div>
      <div className='slide' >

        <div className='left' 
        onClick={()=>setLeft((x)=>{
          x+=50;
          if(x>left_limit)x=left_limit; 
          return x
        })}
        >{"<"}</div>
        <div className='days' >
          <Day left={Left} />
        </div>
        <div className='right'
        onClick={()=>setLeft((x)=>{
          x-=50;
          if(x<right_limit)x=right_limit; 
          return x
        })}
         >{">"}</div>
      </div>
    </div>
  )
}

export default Schedule