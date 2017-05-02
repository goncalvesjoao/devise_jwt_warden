import { connect } from 'react-redux';
import React, { Component } from 'react';
import fetchAllIfNeeded from '../actions/fetchAllIfNeeded';

import Posts from './Posts';

@connect(({ posts }) => posts)
class Container extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchAllIfNeeded());
  }

  render() {
    return (
      <div>
        <p>dass</p>
        <Posts
          posts={ this.props.list }
          remoteStatus={ this.props.remoteStatus }
        />
    </div>
    );
  }
}

export default Container;
