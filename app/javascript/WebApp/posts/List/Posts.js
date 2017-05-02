import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Post from './Post';
import Spinner from './Spinner';

const Posts = ({ posts, remoteStatus }) => (
  remoteStatus.loading
    ? <Spinner />
    : <View>
        <p>dass</p>
        { (posts || []).map((post, i) => <Post key={ i } { ...post } />) }
      </View>
);

export default Posts;
