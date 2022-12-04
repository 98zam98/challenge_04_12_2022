import React from 'react'
import Day from './Day';
const Schedule = () => {
  return (
    <div className='Schedule' >

      <div className='header_font2 w_Schedule' >Schedule</div>
      <div className='slide' >

        <div className='left' >{"<"}</div>
        <div className='days' >
          <Day start={9} end={14} />
        </div>
        <div className='right' >{">"}</div>
      </div>
    </div>
  )
}

export default Schedule