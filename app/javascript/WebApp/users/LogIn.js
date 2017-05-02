import React, { Component } from 'react';

import { Link, Redirect } from 'react-router'
import fakeAuth from './fakeAuth';

class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false
    };
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>

        <button>
          <span>Log in</span>
        </button>
      </div>
    )
  }
}

export default LogIn;
