import React from 'react'
import Countdown from 'react-countdown'
import './CountDown.css'

function CountdownComponent() {
  return (
    <div>
      <Countdown date={Date.now() + 100000000} 
        renderer={props => (
          <div>
              <span className='cd-digit-cell'>
                {props.formatted.days}
              </span>
              :
              <span className='cd-digit-cell'>
                {props.formatted.hours}
              </span>
              :
              <span className='cd-digit-cell'>
                {props.formatted.minutes}
              </span>
              :
              <span className='cd-digit-cell'>
                {props.formatted.seconds}
              </span>
          </div>
          )}
          zeroPadTime={2}
      />
    </div>
  )
}

export default CountdownComponent