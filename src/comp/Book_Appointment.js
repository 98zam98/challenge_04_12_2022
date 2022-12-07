import React from 'react'
import { useDispatch } from 'react-redux';
import dateSlice from '../state/reducer/dateSlice';

const Book_Appointment = () => {
    const dispatch = useDispatch();
    return (
        // <div>
            <button className='Book_Appointment'
            onClick={()=>{
              
              dispatch(dateSlice.actions.confirm_date())
            }}
             >Book Appointment</button>
    )
}
export default Book_Appointment