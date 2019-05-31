import React from 'react';
import { useFetch } from 'react-use-query';
import { Card } from 'semantic-ui-react'

export const Post = () => {
  const [{ state, response }] = useFetch('https://jsonplaceholder.typicode.com/posts/1');
  switch (state) {
    case 'loading':
      return 'Please wait while loading';
    case 'loaded':
      return (
        <Card>
          <Card.Content>
            <Card.Header>{response.title}</Card.Header>
            <Card.Description>{response.body}</Card.Description>
          </Card.Content>
        </Card>
      );
    default:
      return 'Sorry, sheets happen';
  }

}