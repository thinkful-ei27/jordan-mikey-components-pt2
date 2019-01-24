import React from 'react';

export default function MonthInput(props){

  return(
    <div>
      <label>Enter two digit month</label>
  <input type="text" placeholder="06" onChange={e=>props.onChange(e.target.value)}></input>
      </div>
      )

}