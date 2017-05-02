import _ from 'lodash';

export const type = 'bamas.posts.receiveAll';

export function reducer(state, { error, response }) {
  const data = (response && response.data) || [];

  const clonedState = _.cloneDeep(state);

  clonedState.data = {};
  clonedState.list = [];
  clonedState.remoteStatus = { error, loading: false };

  _.each(data, post => {
    clonedState.data[post.id] = post;

    clonedState.list.push(post);
  });

  return clonedState;
}

export default function receiveAll(error, response) {
  return { type, payload: { error, response } };
}
