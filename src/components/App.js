import React from 'react';
import MonthInput from './month-input';
import DayInput from './day-input';
import Output from './output';
import SubmitButton from './submitButton';


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      month: 0,
      date: 0
    }
   }

   setMonth(month) {
     this.setState({month})
   }

render(){
  return(
    <div className="horoscope" >
      <h1>horoscope finder</h1>
      <form>
        <MonthInput onSubmit={month => this.setMonth(month)} />
        <DayInput />
        <SubmitButton />
      </form>
        <Output de/>
    </div>
  )
}

}