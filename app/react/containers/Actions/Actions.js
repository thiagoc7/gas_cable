import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux';
import { Card } from 'elemental';



import { setFinalDate, setInitialDate, fetchPlans } from './../../actions/planActions';

class Actions extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.initialDate != nextProps.initialDate ||
        this.props.finalDate != nextProps.finalDate) {
      this.props.dispatch(fetchPlans())
    }
  }

  render() {
    const { initialDate, finalDate, dispatch } = this.props;
    return (
        <Card>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>

              <div style={{display: 'flex', alignItems: 'center'}}>

                <span style={{margin: 5}}>entre </span>

                <DatePicker
                    selected={moment(initialDate)}
                    dateFormat={'DD/MM/YYYY'}
                    weekdays={["Sab", 'Dom', "Seg", "Ter", "Qua", "Qui", "Sex"]}
                    onChange={date => dispatch(setInitialDate(date.format('YYYY-MM-DD')))}
                />

                <span style={{margin: 5}}> e </span>

                <DatePicker
                    selected={moment(finalDate)}
                    dateFormat={'DD/MM/YYYY'}
                    weekdays={["Sab", 'Dom', "Seg", "Ter", "Qua", "Qui", "Sex"]}
                    onChange={date => dispatch(setFinalDate(date.format('YYYY-MM-DD')))}
                />

              </div>
            </div>

          </div>
        </Card>
    )
  }
}

Actions.propTypes = {
  initialDate: PropTypes.string.isRequired,
  finalDate: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  initialDate: state.plans.initialDate,
  finalDate: state.plans.finalDate
});

export default connect(mapStateToProps)(Actions);
