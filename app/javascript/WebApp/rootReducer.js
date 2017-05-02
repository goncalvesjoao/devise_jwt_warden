import { combineReducers } from 'redux';

import { reducer as posts } from './posts';

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
