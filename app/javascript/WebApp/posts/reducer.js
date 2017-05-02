import { createReducer } from '../utils';
import * as receiveAll from './actions/receiveAll';
import * as loadingAll from './actions/loadingAll';

export const initialState = {
  data: {},
  remoteStatus: {
    error: null,
    loading: false,
  },
};

/* Only necessary to register real actions that have a type (not thunks) */
export const actions = [
  receiveAll,
  loadingAll,
];

export default createReducer(actions, initialState);
