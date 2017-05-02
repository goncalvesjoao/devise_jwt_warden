import _ from 'lodash';
import fetchAll from './fetchAll';

function fetchAllIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchAll(getState())) {
      return dispatch(fetchAll());
    }

    return Promise.resolve();
  };
}

export default fetchAllIfNeeded;

// ********************************* PROTECTED *********************************

function shouldFetchAll(state) {
  const { data, remoteStatus } = state.posts;

  return (remoteStatus.loading !== true && _.isEmpty(data));
}
