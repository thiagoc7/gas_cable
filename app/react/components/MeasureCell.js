import React from 'react';

const MeasureCell = ({style, value, isRed}) => (
    <div style={style}>
      <span style={spanStyle(isRed)}>
      {value}
    </span>
    </div>
);

const spanStyle = isRed => ({
  transition: '200ms all linear',
  color: isRed ? '#d64242' : '#34c240'
});

export default MeasureCell;