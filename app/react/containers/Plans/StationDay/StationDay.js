import React, { Component, PropTypes } from 'react';
import { Card } from 'elemental';

class StationDay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          {this.props.plans.map(plan => <h5 key={plan.id}>{plan.station}</h5>)}
        </div>
    )
  }
}

StationDay.propTypes = {
  plans: PropTypes.array.isRequired
};

export default StationDay;
