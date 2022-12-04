import React from 'react'

const choices = [ '9 am', '8 am', '7 am'];

const Choose_time = () => {
    return (
        <div className='Choose_time' >
            <div className='header_font2 w_Choose_time' >
                Choose time
            </div>
            <div className='choices' >
                {
                    choices.map(i=>(
                        <div className='choice' >
                            {i}
                        </div>))
                }
            </div>
        </div>
    )
}

export default Choose_time