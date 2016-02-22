import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { sendUpdatePlanRequest } from './../../../actions/planActions'

import FormCell from './../../../components/FormCell'
import MeasureCell from './../../../components/MeasureCell'

const tableLabels = [
  '-',
  'Estoque Initial',
  'Vendas',
  'Compras',
  'Estoque Final'
];

const styles = {
  cell: {
    borderBottom: '1px solid #dedede',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    flexBasis: 50,
    paddingRight: 20
  }
};

class StationDay extends Component {

  onSubmit(id, param, value) {
    let plan = {id};
    plan[param] = value;
    this.props.dispatch(sendUpdatePlanRequest(plan))
  }

  render() {
    const plans = this.props.plans.sort((plan1, plan2) => plan1.gasoline > plan2.gasoline);
    return (
        <div style={{flex: 'auto', margin: 5}}>
          <h3>{plans[0].station}</h3>
          <div style={{display: 'flex', flex: 'auto'}}>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              {tableLabels.map(label => <div style={styles.cell} key={label}>{label}</div>)}
            </div>

            {plans.map(plan => (
                <div style={{display: 'flex', flexDirection: 'column'}} key={plan.id}>

                  <div style={styles.cell}>{plan.gasoline}</div>

                  <MeasureCell
                      style={styles.cell}
                      value={plan.initial_volume}
                      isRed={plan.above_max}
                  />

                  <FormCell
                      style={styles.cell}
                      value={plan.sell_volume}
                      active={!plan.finished}
                      onSubmit={value => this.onSubmit(plan.id, 'sell_volume', value)}
                  />

                  <FormCell
                      style={styles.cell}
                      value={plan.buy_volume}
                      active={true}
                      onSubmit={value => this.onSubmit(plan.id, 'buy_volume', value)}
                  />

                  <MeasureCell
                      style={styles.cell}
                      value={plan.final_volume}
                      isRed={plan.below_min}
                  />
                </div>
            ))}

          </div>

        </div>
    )
  }
}

StationDay.propTypes = {
  plans: PropTypes.array.isRequired
};

export default connect()(StationDay);
