import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//importing Redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

//importing components fro routing
import Home from './Components/Home'
import Profile from './Components/Profile'

//creating redux store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>

      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={Profile}/>
      </div>

    </Router>
  </Provider>,
  document.getElementById('root')
)
