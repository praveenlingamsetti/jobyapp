import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

// import StudentContext from '../../Context/StudentContext'

import './index.css'

let questionList = []
class MasterHome extends Component {
  state = {question: '', valuee: ''}

  wordToNumber = arr =>
    arr.map(word => {
      switch (word) {
        case 'zero':
          return 0
        case 'one':
          return 1
        case 'two':
          return 2
        case 'three':
          return 3
        case 'four':
          return 4
        case 'five':
          return 5
        case 'six':
          return 6
        case 'seven':
          return 7
        case 'eight':
          return 8
        case 'nine':
          return 9
        default:
          return 1
      }
    })

  // const val = four(plus(nine())) // returns 13
  // const val2 = eight(minus(three())) // returns 5
  // const val3=six(dividedBy(two()))
  // const val4= seven(times(five()))
  onchangeQuestion = event => {
    this.setState({question: event.target.value})
  }

  operation = (operator, numlist) => {
    switch (operator) {
      case 'times':
        return numlist[0] * numlist[1]
      case 'plus':
        return numlist[0] + numlist[1]
      case 'minus':
        return numlist[0] - numlist[1]
      default:
        return Math.floor(numlist[0] / numlist[1])
    }
  }

  onAddListToContext = () => {
    /* <StudentContext.Consumer>
      {value => {
        const {question, valuee} = this.state
        console.log(valuee, 'yes')
        const {addOperation} = value

        this.AskQuestion = () => {
          addOperation({question, valuee})
        }
      }}
    </StudentContext.Consumer> */
    const {question, valuee} = this.state
    questionList.push({question, valuee, id: uuidv4()})
    const existing = JSON.parse(localStorage.getItem('questions'))
    console.log(existing)
    questionList = [...existing, {question, valuee, id: uuidv4}]

    localStorage.setItem('questions', JSON.stringify(questionList))
  }

  AskQuestion = () => {
    const {question} = this.state
    const out = question.split('(')
    out.pop()
    const operator = out[1]

    const numlist = [out[0], out[2]]

    const resultNum = this.wordToNumber(numlist)

    const val = this.operation(operator, resultNum)
    console.log(val)
    //  this.setState(prevState => ({quantity: prevState.quantity - 1}))

    this.setState({question, valuee: val}, this.onAddListToContext)
  }

  render() {
    const {question, valuee} = this.state

    return (
      <div className="master-home-container">
        <h1>Master log</h1>
        <div className="master-home-card">
          <input
            type="text"
            id="password"
            placeholder="Ask Question"
            className="password-input"
            value={question}
            onChange={this.onchangeQuestion}
          />
          <button
            className="ask-question-button"
            onClick={this.AskQuestion}
            type="button"
          >
            Ask
          </button>
          <h1>Student Answer</h1>
          <div className="answer-container">
            <h2> {valuee}</h2>
          </div>
          <Link to="/">
            <button className="logout-button" type="button">
              Logout
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default MasterHome
