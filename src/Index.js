import React from 'react';        
import ReactDOM from 'react-dom';
import { 
  createStore,            // create store function
  applyMiddleware,        // applyMiddleware function allows use of thunk
  compose } from 'redux'; // lets us combine applyMiddleware and redux chrome extension 
import { Provider } from 'react-redux';  // gives us access to props without passing each time
import thunk from 'redux-thunk'; // gives access to thunk so we can return functions in action
import './index.css'

// import files to accessing
import App from './App'
import rootReducer from './reducers/rootReducer'


const store = createStore( // create Redux store with thunk and redux chrome extension
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>  {/* give all components in App component access to store */}
    <App />   {/* renders App component */}
  </Provider>,
  document.getElementById("root") // get 'root' div and append App component
)
