import Choose_time from './Choose_time'
import Fees from './Fees'
import Schedule from './Schedule'

import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generate_days } from '../util/date_func';
import dateSlice from '../state/reducer/dateSlice';



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