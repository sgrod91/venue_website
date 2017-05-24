/*jshint esversion: 6 */

// Stylesheet
import './index.css';

// Standard React/Redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

// React Router stuff
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

// import all components and their reducers here
import homeReducer from './home/Home.reducer';
import HomeContainer from './home/Home';
import EventPageContainer from './event_page/Event_Page';
import eventPageReducer from './event_page/Event_Page.reducer';


const reducer = Redux.combineReducers({
// the hello property here corresponds to the
// state => state.hello line - argument of
// ReactRedux.connect in hello/Hello.js
// Use this pattern for each component
  home: homeReducer,
  event_page: eventPageReducer
});


const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/menu" activeClassName="active">Menu</Link></li>
          <li><Link to="/calendar" activeClassName="active">Calendar</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
      <Route path="/shows/:id" component={EventPageContainer}/>
        <IndexRoute component={HomeContainer}>
        </IndexRoute>


      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
