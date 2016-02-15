import React, { Component, PropTypes } from 'react';
import { Card } from 'elemental';

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

  render() {
    const plans = this.props.plans.sort((plan1, plan2) => plan1.gasoline > plan2.gasoline);
    return (
        <div style={{flex: 'auto', margin: 5}}>
          <h3>{plans[0].station}</h3>
          <div style={{display: 'flex', flex: 'auto'}}>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              {tableLabels.map(label => <div style={styles.cell}>{label}</div>)}
            </div>

            {this.props.plans.map(plan => (
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <div style={styles.cell}>{plan.gasoline}</div>
                  <div style={styles.cell}>{plan.initial_volume}</div>
                  <div style={styles.cell}>{plan.sell_volume}</div>
                  <div style={styles.cell}>{plan.buy_volume}</div>
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
