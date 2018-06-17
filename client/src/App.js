import React from 'react';
import WelcomePage from './Containers/Layout/WelcomePage/WelcomePage';
import { BrowserRouter, Route } from 'react-router-dom';
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import userReducer from './store/reducers/userReducer';
// import messageReducer from './store/reducers/messageReducer';
//
// const rootReducer = combineReducers({
//     userReducer,
//     messageReducer,
// });
//
// const logger = store => {
//   return next => {
//     return action => {
//       const result = next(action);
//       return result;
//     }
//   }
// };
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const App = (props) => (
  // <Provider store={store}>
    <BrowserRouter>
      <main>
        <Route path="/" exact component={WelcomePage} />
      </main>
    </BrowserRouter>
  // </Provider>
);

export default App;
