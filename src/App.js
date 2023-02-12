import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Main from './components/Main'
import LoginMaster from './components/LoginMaster'
import LoginStudent from './components/LoginStudent'
import SignUpMaster from './components/SignUpMaster'
import SignUpStudent from './components/SignUpStudent'
import StudentHome from './components/StudentHome'
import MasterHome from './components/MasterHome'
import StudentContext from './Context/StudentContext'

import './App.css'

class App extends Component {
  state = {list: [{question: 'sum', valuee: 5}]}

  addOperation = product => {
    this.setState(prevState => ({list: [...prevState.list, product]}))
  }

  render() {
    const {list} = this.state

    return (
      <StudentContext.Provider value={{list, operation: this.addOpertion}}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/loginmaster" component={LoginMaster} />
          <Route exact path="/loginstudent" component={LoginStudent} />
          <Route exact path="/signupmaster" component={SignUpMaster} />
          <Route exact path="/signupstudent" component={SignUpStudent} />
          <Route exact path="/studenthome" component={StudentHome} />
          <Route exact path="/masterhome" component={MasterHome} />
        </Switch>
      </StudentContext.Provider>
    )
  }
}

export default App
