import React from 'react'



// Date().split(' ')[0]
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const days = []
for (let i = 0; i < 30; i++) {
  // days.push(weekdays[((Date().split(' ')[0])+i)%weekdays.length])
  days.push({ i: i, id: i + "_day", name: weekdays[(weekdays.findIndex((j) => j == Date().split(' ')[0]) + i) % weekdays.length], num: parseInt(Date().split(' ')[2]) + i })
}
// console.log(Date())
// console.log(((Date().split(' ')[0])+1)%weekdays.length)
// console.log(weekdays[((Date().split(' ')[0])+1)%weekdays.length])
// console.log(days)
// ((Date().split(' ')[0])+2)%days.length]
// console.log(days.findIndex((i)=>i==Date().split(' ')[0]));
// console.log(days[days.findIndex((i)=>i==Date().split(' ')[0])]);
// console.log(days[(days.findIndex((i)=>i==Date().split(' ')[0])+1)%days.length]);
// console.log(days[(days.findIndex((i)=>i==Date().split(' ')[0])+2)%days.length]);



const Day = (x) => {
  return (
    <div className='day_card_slider' >
      {
        days.filter(i => ((i.i>=x.start)&(i.i < x.end))).map(i => (
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



// const Day = () => {
//   return (
//     <div className='day_card' >
//       <div>{days[0].name}</div>
//       <div>{

//         (days[0].num < 10) ?
//           <div>0{days[0].num}</div> :
//           <div>{days[0].num}</div>

//       }</div>
//     </div>
//   )
// }

export default Day