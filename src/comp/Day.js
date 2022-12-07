import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
const days = []

const Day = (x) => {

  const selector = useSelector(s=>s.date)
  // const dispatch = useDispatch();
  // dispatch(dateSlice.actions.get_days(days))
  // console.log(selector.days);


  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       const result = await axios.get("https://cura-front-end-test.herokuapp.com/");

  //     } catch (e) {
  //       console.log("error")
  //     }
  //   };
  //   fetchdata();

  // }, [])



  return (
    <div className='day_card_slider' 
    style={{left:x.left+"px"}}
    >
      {
        // selector.days.filter(i => ((i.i >= x.start) & (i.i < x.end))).map(i => (
        selector.days.map(i => (
          <div className='day_card' key={i.i} >
            <div>{i.name}</div>
            <div>{

              (i.num < 10) ?
                <div>0{i.num}</div> :
                <div>{i.num}</div>

            }</div>
          </div>))
      }
    </div>
  )
}


export default Day


//     const unix_unav_fr = JSON.parse(result.data).schedule[0].unavailable[0].from_unix;
    