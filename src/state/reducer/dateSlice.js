import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { add_hour2day } from '../../util/date_func';

const initialState = {
    chosen_day: "not_yet", // unix
    chosen_time: "not_yet", // unix
    confirmed_date: "not_yet", // unix
    days: [],
    times: []
}

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        chose_day: (s, a) => {
            s.chosen_day = a.payload;
        },
        chose_time: (s, a) => {
            s.chosen_time = a.payload;
        },
        confirm_date: (s) => {
            try {
                s.confirmed_date = add_hour2day(s.chosen_time, s.chosen_day)
            } catch (e) {
                console.log("choose both")
            }
        },
        get_days: (s, a) => {
            s.days = a.payload;
        },
        get_times: (s, a) => {
            s.times = a.payload;
        },
    }
})

export default dateSlice