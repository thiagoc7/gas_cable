import React from 'react';
import { Card } from 'elemental';

const DateCard = ({date, children}) => (
    <Card>
      <h2>{date}</h2>
      <div style={{display: 'flex'}}>
        {children}
      </div>
    </Card>
);

export default DateCard;