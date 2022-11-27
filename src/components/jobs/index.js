import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Jobs extends Component {
  componentDidMount() {
    this.getJobsDetails()
  }

  getJobsDetails = async () => {
    const jwtToken = Cookies.get('jwtToken')

    const url =
      'https://apis.ccbp.in/jobs?employment_type=FULLTIME,PARTTIME&mimium_package=1000000$search=random'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return <div className="job-container">jobs</div>
  }
}
export default Jobs
