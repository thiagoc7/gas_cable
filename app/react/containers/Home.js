import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updatePlan } from './../actions/planActions'

import NavBar from './../components/NavBar'
import Actions from './Actions/Actions'
import Plans from './Plans/Plans'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var component = this;
    App.plan = App.cable.subscriptions.create("PlanChannel", {
      connected: () => console.log('conected'),
      disconnected: () => console.log('disconected'),
      received: function(data) {
        component.props.dispatch(updatePlan(data.plan))
      }
    });
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

export default connect()(Home);
