import React from 'react';

export default function DayInput(props){

  return(
    <div>
      <label>Enter a date</label>
  <input type="number" min="1" max="31" placeholder="15" onChange={e=>props.onChange(e.target.value)}></input>
      </div>
  )
}