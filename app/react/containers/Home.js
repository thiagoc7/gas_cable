import React, { Component, PropTypes } from 'react';

import NavBar from './../components/NavBar'
import Actions from './Actions/Actions'
import Plans from './Plans/Plans'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <NavBar />
          <div style={{margin: 20}}>
            <Actions />
            <Plans />
          </div>
        </div>
    )
  }
}
