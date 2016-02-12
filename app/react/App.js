import React, { Component, PropTypes } from 'react';

import Home from './containers/Home';

require('elemental/less/elemental.less');
require('./styles.less');

export default class App extends Component {
  render() {
    return (
        <Home />
    )
  }
}
