import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import gasolineApp from './reducers/index'

import Home from './containers/Home';

require('elemental/less/elemental.less');
require('./styles.less');

export default class App extends Component {
  render() {
    const initialState = {
      plans: {
        initialDate: moment().format('YYYY-MM-DD'),
        finalDate: moment().add(1, 'day').format('YYYY-MM-DD'),
        items: this.props.plans
      }
    };

    return (
        <Provider store={createStore(gasolineApp, initialState, applyMiddleware(thunkMiddleware))}>
          <Home />
        </Provider>
    )
  }
}

App.propTypes = {
  plans: PropTypes.array.isRequired
};
