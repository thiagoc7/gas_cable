import React, { Component, PropTypes } from 'react';
import { Card } from 'elemental';

import FormCell from './../../../components/FormCell'

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

  onSubmit(id, value) {
    console.log(id, parseInt(value))
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

            {this.props.plans.map(plan => (
                <div style={{display: 'flex', flexDirection: 'column'}} key={plan.id}>
                  <div style={styles.cell}>{plan.gasoline}</div>
                  <div style={styles.cell}>{plan.initial_volume}</div>

                  <FormCell
                      style={styles.cell}
                      value={plan.sell_volume}
                      active={!plan.finished}
                      onSubmit={this.onSubmit.bind(null, plan.id)}
                  />

                  <FormCell
                      style={styles.cell}
                      value={plan.buy_volume}
                      active={true}
                      onSubmit={this.onSubmit.bind(null, plan.id)}
                  />

                  <div style={styles.cell}>{plan.final_volume}</div>
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

export default StationDay;