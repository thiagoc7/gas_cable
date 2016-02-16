import React, { Component, PropTypes } from 'react';

const styles = {
  input: {
    border: 0,
    display: 'block',
    resize: 'none',
    font: 'inherit',
    padding: 0,
    margin: 0,
    outline: 'none',
    width: '100%',
    background: 'transparent'
  }
};

class FormCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  render() {
    const { value, active, style, onSubmit } = this.props;

    if (active) {
      return (
          <div style={style}>
            <input
                type="text"
                placeholder="1000.00"
                style={styles.input}
                value={this.state.value}
                onChange={e => this.setState({value: e.target.value})}
                onBlur={e => onSubmit(this.state.value)}
                onKeyPress={e => e.charCode == 13 ? onSubmit(this.state.value) : true}
            />
          </div>
      )
    } else {
      return <div style={style}><span style={{color: '#777'}}>{value}</span></div>
    }
  }
}

FormCell.propTypes = {
  value: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default FormCell;