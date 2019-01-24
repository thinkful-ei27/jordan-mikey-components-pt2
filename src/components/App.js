import React from 'react';
import MonthInput from './month-input';
import DayInput from './day-input';


export default class App extends React.Component{
  constructor(props){
    super(props)

   }

render(){
  return(
    <div className="horoscope" >
      <h1>horoscope finder</h1>
      <form>
        <MonthInput />
        <DayInput />

      </form>

    </div>
  )
}

}