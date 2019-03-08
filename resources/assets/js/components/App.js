import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Redux + Thunk
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './../reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
//Components
import Header from './Header'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import SingleProject from './SingleProject'

class App extends Component {
  render () {
    return (

        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={ProjectsList} />
            <Route path='/create' component={NewProject} />
            <Route path='/:id' component={SingleProject} />
          </Switch>
        </div>

    )
  }
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//redux dev tools
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'))
