import React from 'react';
import { useFetch } from 'hook-use-fetch';
import { Header } from 'semantic-ui-react';

export const Post = ({ id }) => {
  const [fetchState, response] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    [id]
  );
  switch (fetchState) {
    case 'loading':
      return 'Please wait while loading';
    case 'loaded':
      return (
        <article>
          <Header as='h4'> {response.title}</Header>
          <br></br>
          {response.body}
        </article >
      );
    default:
      return 'Sorry, shits happen';
  }
}
