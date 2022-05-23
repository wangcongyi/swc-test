import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


function notices(state, action) {
  return state
}

const store = createStore(notices)

import App from './index.jsx'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
