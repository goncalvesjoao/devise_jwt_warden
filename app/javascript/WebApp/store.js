import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {
  createStore,
  applyMiddleware
} from 'redux';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
