import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const Home = () => {
  const jwtToken = Cookies.get('jwtToken')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="Home-container">
        <div className="content">
          <h1>Find The Job That Fits Your Life</h1>

          <p>
            Millions of people are searching for jobs,salary information,company
            reviews.Find the job that fits your abilities and potential
          </p>
          <button type="button" className="button-find">
            Find jobs
          </button>
        </div>
      </div>
    </>
  )
}
export default Home
