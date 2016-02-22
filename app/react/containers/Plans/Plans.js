import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import StationDay from './StationDay/StationDay'
import DateCard from './../../components/DateCard'

class Plans extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { plans } = this.props;
    const dates = getValuesFromKey('date', plans);
    const stations = getValuesFromKey('station', plans);

    return (
        <div>
          {dates.map(date => (
              <DateCard key={date} date={date}>
                {stations.map(station => (
                    <StationDay
                        key={station}
                        plans={plans.filter(plan => plan.date == date && plan.station == station)}
                    />
                ))}
              </DateCard>
          ))}
        </div>
    )
  }
}

Plans.propTypes = {
  plans: PropTypes.array.isRequired
};

const getValuesFromKey = (key, arr) => {
  const items = arr.map(item => item[key]);
  return [...new Set(items)].sort((item1, item2) => item1 > item2)
};

const mapStateToProps = (state) => {
  return {
    plans: state.plans.items
  }
};

export default connect(mapStateToProps)(Plans);
