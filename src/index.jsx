import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
// import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';
import carsReducer from './reducers/cars_reducer';
import carsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import CarsShow from './containers/cars_show';

const garageName = `garage 55`;
//
const identityReducer = (state = null) => state;

const initialState = {
  garage: garageName,
  cars: [
    // { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
    // { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
    // { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
    // { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
  ]
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
          <Route path="/cars" exact component={carsIndex} />
          <Route path="/cars/new" exact component={CarsNew} />
          <Route path="/cars/:id" exact component={CarsShow} />
      </Switch>
    </Router> 
  </Provider>,
  document.getElementById('root')
);
