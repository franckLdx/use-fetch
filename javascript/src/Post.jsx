import React, { useState, useEffect } from 'react';
import { useFetch } from 'react-use-query';
import { Card } from 'semantic-ui-react'

export const Posts = () => {
  const [{ state, response }] = useFetch('https://jsonplaceholder.typicode.com/posts');
  switch (state) {
    case 'loading':
      return 'Please wait while loading';
    case 'loaded':
      return (
        <Card.Group>
          {response.map(post => <Post key={post.id} {...post} />)}
        </Card.Group>);
    default:
      return 'Sorry, shits happen';
  }
}

const extractUserName = (state, response) => {
  switch (state) {
    case 'loaded':
      return response.username;
    case 'loading':
    case 'nothing':
      return 'Loading...';
    default:
      return '';
  }
};

export const Post = post => {
  const [userName, setUserName] = useState('Loading...');
  const [{ state, response }] = useFetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  useEffect(
    () => setUserName(extractUserName(state, response)),
    [state, response]
  );
  return (
    <Card>
      <Card.Content>
        <Card.Header>{post.title}</Card.Header>
        <Card.Description>{post.body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        Author: {userName}
      </Card.Content>
    </Card>
  );
}
