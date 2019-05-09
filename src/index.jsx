import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index-root-reducer';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(middlewareLogger));

// let unsubscribe = store.subscribe(() =>
//   console.log('subscribe', store.getState())
// );

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
