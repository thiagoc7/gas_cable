import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gasolineApp from './reducers/index'

import Home from './containers/Home';

require('elemental/less/elemental.less');
require('./styles.less');

export default class App extends Component {
  render() {
    return (
        <Provider store={createStore(gasolineApp, this.props)}>
          <Home />
        </Provider>
    )
  }
}

App.propTypes = {
  plans: PropTypes.array.isRequired
};
