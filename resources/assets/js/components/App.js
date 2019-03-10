//React, React-> Component, ReactDOM
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//React Router DOM
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Redux + Thunk + rootReducer
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './../reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//Components
import Header from './Header';
import NewProject from './NewProject';
import ProjectsList from './ProjectsList';
import SingleProject from './SingleProject';

/**********************/
/* MAIN APP COMPONENT */
/**********************/

class App extends Component {
  render () {
    return (

        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={ProjectsList} />
            <Route path='/create' component={NewProject} />
            <Route path='/:id' component={SingleProject} />
          </Switch>
        </React.Fragment>

    )
  }
}

/***************/
/* REDUX STORE */
/***************/

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//redux dev tools
  )
);

/********************/
/* REACTDOM -> RENDER */
/********************/
//Provider-> 'Provides' Redux Store to the App
//BrowserRouter -> Handles App Routing
//App Component

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'));
