import './App.scss';
import dateSlice from './state/reducer/dateSlice';
import Store from './state/Store';
import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react'
// import Schedule_Appointment from './Schedule_Appointment';
import Book_Appointment from './comp/Book_Appointment';
import Schedule_Appointment from './comp/Schedule_Appointment';
import Card from './comp/Card';
import { generate_days } from './util/date_func';
import axios from 'axios';


const days = generate_days();

const App = () => {
  const selector = useSelector(s => s.date)
  const dispatch = useDispatch();
  dispatch(dateSlice.actions.get_days(days))
  console.log(selector);
  // console.log(days);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const result = await axios.get("https://cura-front-end-test.herokuapp.com/");

        console.log(result);
        // console.log(JSON.parse(result.data).schedule[0].unavailable[0].from_unix);
        // console.log(JSON.parse(result.data));
        console.log(JSON.parse(result.data).schedule[0]);
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