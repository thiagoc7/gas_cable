import React, { Component, PropTypes } from 'react';

import Plan from './Plan/Plan'

export default class Plans extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Plan />
          <Plan />
          <Plan />
        </div>
    )
  }
}
