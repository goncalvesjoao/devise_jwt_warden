import config from '../../config';
import { errorHandler } from '../../utils';

import loadingAll from './loadingAll';
import receiveAll from './receiveAll';

function fetchAll() {
  return (dispatch) => {
    const url = config.apiUrl + 'v1/posts';

    dispatch(loadingAll());

    fetch(url)
      .then(response => response.json())
      .then(response => gotMembers(dispatch, null, response))
      .catch(error => gotMembers(dispatch, error, null));
  };
}

export default fetchAll;

// ********************************* PROTECTED *********************************

function gotMembers(dispatch, error, response) {
  errorHandler(error, 'while trying to fetch all Members');

  dispatch(receiveAll(error, response));
}
