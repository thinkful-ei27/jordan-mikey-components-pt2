import React from 'react';
import MonthInput from './month-input';
import DayInput from './day-input';
import Output from './output';
import SubmitButton from './submitButton';
import ZodiacArray from '../horoscopes.json'


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
   setDate(date) {
    this.setState({date})
  }

   handleSubmit(e){
     e.preventDefault();
      const ourMonth =this.state.month.toString();
      const ourDate = this.state.date.toString();
   const monthObj = ZodiacArray.find(month => {
     return Object.keys(month)[0] === ourMonth
      })
     
   }

render(){

  const zodiac = this.handleSubmit
  return(
    <div className="horoscope" >
      <h1>Horoscope finder</h1>
      <form>
        <MonthInput onChange={month => this.setMonth(month)} />
        <DayInput onChange={date => this.setDate(date)}/>
        <SubmitButton onSubmit={(e) => this.handleSubmit(e)}/>
      </form>
        <Output value={zodiac}/>
    </div>
  )
}

}