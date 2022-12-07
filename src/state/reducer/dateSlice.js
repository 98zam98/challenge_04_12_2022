import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

// newdate = year + "/" + month + "/" + day;

const initialState = {
    // chosen_date : {year : 0, month : 0 , day:0}
    chosen_date : "not_yet", // unix
    confirmed_date : "not_yet", // unix
    days : [],
    avalability:{av_fr : "not_yet", unav_fr : "not_yet", unav_to : "not_yet", av_to : "not_yet"}
    // date : "initialState"
}

const dateSlice = createSlice({
    
    name: 'cart',
    initialState,
    reducers: {
        chose_date:(s,a)=>{
            s.chosen_date=a;
        },
        confirm_date:(s,a)=>{
            s.chosen_date=a;
        },
        get_days:(s,a)=>{
            // s.days.push(...a);
            // s.days.push([...a.payload]);
            s.days=a.payload;
        },
    }
})

export default dateSlice