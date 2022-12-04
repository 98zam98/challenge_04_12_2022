import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

// newdate = year + "/" + month + "/" + day;

const initialState = {
    date : year + "/" + month + "/" + day
    // date : "initialState"
}

const dateSlice = createSlice({
    
    name: 'cart',
    initialState,
    reducers: {
        test:(s)=>{
            s.date="test"
        }
    }
})

export default dateSlice