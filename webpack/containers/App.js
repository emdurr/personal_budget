import React from 'react';
import { Link } from 'react-router';

const styles = {
	logoName: { paddingLeft: '10px' },
	aboutLink: { fontSize: '30px', color: 'blue' },
	nav: { backgroundColor: 'green' }
}

const App = ({ children }) => (
  <div>
  	<nav>
      <div className="nav-wrapper" style={ styles.nav }>
        <Link to="/" style={ styles.logoName } className="brand-logo">Personal Finances</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/bills">Bills</Link></li>
        </ul>
      </div>
    </nav>
    { children }
  </div>
)

export default App;

