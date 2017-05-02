import React from 'react';

import {
  StyleSheet,
  Text,
} from 'react-native';

const Post = (post) => (
  <Text style={ styles.header }>{ post.title }</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});

export default Post;
