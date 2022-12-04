import './App.scss';
import dateSlice from './state/reducer/dateSlice';
import Store from './state/Store';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react'
// import Schedule_Appointment from './Schedule_Appointment';
import Book_Appointment from './comp/Book_Appointment';
import Schedule_Appointment from './comp/Schedule_Appointment';
import Card from './comp/Card';

const App = () => {
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