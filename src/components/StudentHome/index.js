// StudentContext from '../../Context/StudentContext'
import {Link} from 'react-router-dom'
import Question from '../EachQuestion'
import './index.css'

const list = JSON.parse(localStorage.getItem('questions'))
console.log(list)

const StudentHome = () => (
  <>
    <h1 className="student-log">Student Log</h1>
    <ul className="questions-list">
      <br />
      <Link to="/">
        <button className="go-to-master" type="button">
          Go To Home
        </button>
      </Link>
      {list.map(each => (
        <Question key={each.id} Details={each} />
      ))}
    </ul>
  </>
)

export default StudentHome
