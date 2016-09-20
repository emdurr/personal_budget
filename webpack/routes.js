import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Bills from './components/Bills';
import Bill from './components/Bill';
import NoMatch from './components/NoMatch';

export default (
  <Route>
    <Route path="/" component={ App }>
    	<IndexRoute component={ Bills } />
    	<Route path='/bills/:id' component={ Bill } />
			<Route path="*" status={404} component={ NoMatch } />
		</Route>
  </Route>
)

