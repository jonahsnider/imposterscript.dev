import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <a href="https://imposterscript.dev">
            <img src="/imposterscript.png" alt="ImposterScript logo" />
            <h2>ImposterScript</h2>
          </a>
        </div>

        <a href="https://github.com/jonahsnider/imposterscript.dev">
          <img className={styles.small} src="/github.png" alt="GitHub logo" />
          <h3>GitHub repo</h3>
        </a>
      </header>
    </div>
  );
};

export default Header;
