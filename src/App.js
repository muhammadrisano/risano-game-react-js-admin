import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Login from '../src/Screens/Login'
import leaderboard from '../src/Screens/Leaderboard'
import Pattern from '../src/Screens/Pattern'
import Sound from '../src/Screens/Sound'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path='/login' exact component={Login} />
            <Route path='/leaderboard' exact component={leaderboard} />
            <Route path='/sound' exact component={Sound} />
            <Route path='/pattern' exact component={Pattern} />
            {/* <Route path='/books/:idbook' exact component={detailbook} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.users.token,
    role_id: state.users.role_id
  }

}
export default connect(mapStateToProps)(App);
