import React from 'react';
import { Glyph } from 'elemental';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 25,
    marginTop: 15
  },
  title: {
    fontSize: 40,
    color: "rgba(11, 23, 70, 0.64)"
  }
};

const NavBar = () => (
    <div style={styles.container}>
      <span style={styles.title}>Gasoline</span>
          <span style={{cursor: 'pointer'}} onClick={() => console.log('logout')}>
            <Glyph icon="log-out" type="default"/>
          </span>
    </div>
);

export default NavBar;