import './App.scss';
import dateSlice from './state/reducer/dateSlice';
import Store from './state/Store';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react'
// import Schedule_Appointment from './Schedule_Appointment';
import Book_Appointment from './comp/Book_Appointment';
import Schedule_Appointment from './comp/Schedule_Appointment';
import Card from './comp/Card';
import { add_hour2day, date_from_unix, generate_days, unix_step_hour } from './util/date_func';
import axios from 'axios';

// let this_time = 0;
const days = generate_days();

const App = () => {
  const selector = useSelector(s => s.date)
  const dispatch = useDispatch();
  dispatch(dateSlice.actions.get_days(days))
  console.log(selector);
  // console.log(days);
  
  // console.log("date_from_unix(j)");
  // console.log(1702033199);
  // console.log(add_hour2day(1702033199,1702033199));
  // console.log(date_from_unix(add_hour2day(1702033199,1702033199)));
  // console.log("done(j)");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const result = await axios.get("https://cura-front-end-test.herokuapp.com/");

        const times = [];
        for (const i of JSON.parse(result.data).schedule[0].available) {
          // console.log(i);
          for (let j = i.from_unix; j < i.to_unix; j += unix_step_hour) {
            let ok = true;
            for (const k of JSON.parse(result.data).schedule[0].unavailable) {
              if (j >= k.from_unix && j <= k.to_unix)
              ok = false;
            }
            if (ok)
            times.push(j)
            // console.log(date_from_unix(j));
          }
        }
        dispatch(dateSlice.actions.get_times(times))

      } catch (e) {
        console.log("error")
      }
    };
    fetchdata();

  }, [])



  return (
    <div className="App" >
      <div className="items" >
        <Schedule_Appointment />
        <Card />
        <Book_Appointment />
      </div>
    </div>
  )
}

export default App