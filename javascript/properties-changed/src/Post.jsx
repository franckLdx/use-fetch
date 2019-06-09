import React, { useState, useEffect } from 'react';
import { useFetch } from 'react-use-query';
import { Header } from 'semantic-ui-react';

export const Post = ({ id }) => {
  const [foo, setFoo] = useState(0);
  useEffect(() => {
    setInterval(
      () => {
        console.log('INTERVAL', foo);
        setFoo(foo + 1);
      },
      1000
    )
  }, [foo]);
  const [state, response] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    [id]
  );
  switch (state) {
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
