import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import dateSlice from '../state/reducer/dateSlice';
import { add_hour2day, date_from_unix } from '../util/date_func';

const Choose_time = () => {

    const selector = useSelector(s => s.date)
    const dispatch = useDispatch();
    


    return (
        <div className='Choose_time' >
            <div className='header_font2 w_Choose_time' >
                Choose time
            </div>
            <div className='choices' >
                {
                    selector.times.map(i=>(
                        <div className='choice' key={i} 
                        onClick={()=>{
                            dispatch(dateSlice.actions.chose_time(i))
                        }}
                        >
                            {/* {i} */}
                            {date_from_unix(i).hour_12}
                            {" "}
                            {date_from_unix(i).hour_pm_am}
                        </div>))
                }
            </div>
        </div>
    )
}

export default Choose_time