import _ from 'lodash';

export const type = 'bamas.posts.loadingAll';

export function reducer(state) {
  const clonedState = _.cloneDeep(state);

  clonedState.remoteStatus = { error: null, loading: true };

  return clonedState;
}

export default function loadingAll() {
  return { type };
}
