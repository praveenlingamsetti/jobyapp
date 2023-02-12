import {Link} from 'react-router-dom'

import './index.css'

const Main = () => (
  <div>
    <h1 className="app-heading heading-app">You Tell,I Do</h1>
    <div className="main-container">
      <div className="student-master">
        <Link to="/signupstudent">
          <div className="master-container">
            <h1 className="student-heading">student</h1>
            <img
              className="student-logo"
              alt="avatar"
              src="https://res.cloudinary.com/dv8lzqepi/image/upload/v1676103399/th_kngua9.jpg"
            />
          </div>
        </Link>
        <Link to="/signupmaster">
          <div className="master-container">
            <h1 className="student-heading">Master</h1>
            <img
              className="student-logo"
              alt="avatar"
              src="https://res.cloudinary.com/dv8lzqepi/image/upload/v1676103795/th_1_v6w9qd.jpg"
            />
          </div>
        </Link>
      </div>

      <h1 className="app-heading">Select Student/Master</h1>
    </div>
  </div>
)

export default Main
