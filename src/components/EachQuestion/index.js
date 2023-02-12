import './index.css'

const Question = props => {
  const {Details} = props
  const {question, valuee} = Details
  return (
    <li className="each-question">
      <h1>Question: {question}</h1>
      <h2> Answer: {valuee}</h2>
    </li>
  )
}

export default Question
