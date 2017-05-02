import _ from 'lodash';

function createReducer(actions, initialState) {
  const reducers = {};

  _.each(actions, (action) => { reducers[action.type] = action.reducer; });

  return (state = initialState, action) => {
    const reducer = reducers[action.type];

    if (reducer) {
      return reducer(state, action.payload);
    }

    return state;
  };
}

export default createReducer;
