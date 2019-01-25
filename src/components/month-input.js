import React from 'react';

export default function MonthInput(props){

  return(
    <div>
      <label>Select a month</label>
      {/* <input type="text" placeholder="February" onChange={e=>props.onChange(e.target.value)}></input> */}
      <select onChange={e=>props.onChange(e.target.value)}>
        <option value="" select>Choose one!</option>
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </div>
  )

}