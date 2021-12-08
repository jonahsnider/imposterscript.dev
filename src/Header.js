import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <a href="https://imposterscript.dev">
          <img
            src="/imposterscript.png"
            alt="ImposterScript logo"
          />
          <h2>ImposterScript</h2>
        </a>
      </header>
    </div>
  );
};

export default Header;
