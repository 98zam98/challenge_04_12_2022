import React from 'react'
import Choose_time from './Choose_time'
import Fees from './Fees'
import Schedule from './Schedule'

const Card = () => {
  return (
    <div className='Card' >
        <Fees/>
        <Schedule/>
        <Choose_time/>
    </div>
  )
}

export default Card