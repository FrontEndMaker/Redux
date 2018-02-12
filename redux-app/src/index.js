import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { Router, Route, hashHistory } from 'react-router';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';

import reducer from './reducers';
import About from './About';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    {/* <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/about' component={About} />
    </Router> */}
    <App />
  </Provider>,
  document.getElementById('root')
);


// import { createStore } from 'redux'
//
// function playlist(state = [], action) {
//   if (action.type === 'ADD_TRACK') {
//     //return (state.concat(action.payload))
//     return [
//       ...state,
//       action.payload
//     ]
//
//   }
//   return state
// }
//
// const store = createStore(playlist)
//
// const trackInput = document.querySelectorAll('.trackInput')[0]
// const addTrackBtn = document.querySelectorAll('.addTrack')[0]
// const list = document.querySelectorAll('.list')[0]
//
// store.subscribe(() => {
// console.log(store.getState());
//   const li = document.createElement('li')
//   trackInput.value = ''
//
//   store.getState().forEach(track => {
//     li.textContent = track
//     list.appendChild(li)
//   })
// })
//
// addTrackBtn.addEventListener('click', () => {
//   const trackName = trackInput.value;
//   store.dispatch({ type: 'ADD_TRACK', payload: trackName })
// })
