import React from 'react';

export default function DayInput(props){

  return(
    <div>
      <label>Enter two digit day</label>
  <input type="text" placeholder="28" onChange={e=>props.onChange(e.target.value)}></input>
      </div>
  )
}