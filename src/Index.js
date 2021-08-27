import React from 'react';        
import ReactDOM from 'react-dom';
import { createStore } from 'redux';  // allows us to creat store
import { Provider } from 'react-redux';  // gives us access to props without passing each time

// import files to accessing
import App from './App'
import rootReducer from './reducers/rootReducer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>  {/* give all components in App component access to store */}
    <App />   {/* renders App component */}
  </Provider>,
  document.getElementById("root") // get 'root' div and append App component
)
