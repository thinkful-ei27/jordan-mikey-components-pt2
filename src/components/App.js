import React from 'react';
import MonthInput from './month-input';
import DayInput from './day-input';
import Output from './output';
import SubmitButton from './submitButton';
import ZodiacArray from '../horoscopes.json'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      month: '',
      date: 0,
      response: 'Get your Zodiac!'
    }
  }

  setMonth(month) {
    this.setState({ month })
  }
  setDate(date) {
    this.setState({ date })
  }

  handleSubmit(e) {
    e.preventDefault();
    const monthObj = ZodiacArray.find(obj => {
      return obj.month === this.state.month.toLowerCase()
    })

    if (!monthObj) {
      this.setState({ response: 'There seems to be a problems with the `month` you entered' })
    }
    else if (monthObj && monthObj.date > this.state.date) {
      this.setState({ response: monthObj.sign[0] })
    } else {
      this.setState({ response: monthObj.sign[1] })
    }
  }

  render() {
    return (
      <div className="horoscope" >
        <h1>Horoscope finder</h1>
        <form>
          <MonthInput onChange={month => this.setMonth(month)} />
          <DayInput onChange={date => this.setDate(date)} />
          <SubmitButton onSubmit={(e) => this.handleSubmit(e)} />
        </form>
        <Output value={this.state.response} />
      </div>
    )
  }
}