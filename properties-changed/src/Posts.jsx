import React, { useState, useCallback } from 'react';
import { useFetch } from 'hook-use-fetch';
import { Dropdown } from 'semantic-ui-react'
import { Post } from './Post'

export const Posts = () => {
  const [fetchState, result] = useFetch('https://jsonplaceholder.typicode.com/posts', []);
  const [selectedPost, setSelectedPost] = useState(undefined);
  const onPostSelected = useCallback(
    (item, { value }) => setSelectedPost(value),
    []
  );
  switch (fetchState) {
    case 'loading':
      return 'Please wait while loading';
    case 'loaded':
      const options = result.map(post => ({
        key: post.id,
        value: post.id,
        text: post.title
      }))
      return (<>
        <Dropdown
          placeholder='Select a post'
          fluid
          search
          selection
          options={options}
          value={selectedPost}
          onChange={onPostSelected}
        />
        {selectedPost && (<><br /> <Post id={selectedPost} /></>)}
      </>);
    default:
      return 'Sorry, shits happen';
  }
}