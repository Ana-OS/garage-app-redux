import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
// import logger from 'redux-logger';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';
import carsReducer from './reducers/cars_reducer';
import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import CarsShow from './containers/cars_show';

const garageName = `garage 55`;
const history = createBrowserHistory();
const identityReducer = (state = null) => state;

const initialState = {
  garage: garageName,
  cars: []
};

// prompt("What is your garage?") ||
const reducers = combineReducers({
  garage: identityReducer,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
          <Route path="/" exact component={CarsIndex} />
          <Route path="/cars/new" exact component={CarsNew} />
          <Route path="/cars/:id" component={CarsShow} />
      </Switch>
    </Router> 
  </Provider>,
  document.getElementById('root')
);
