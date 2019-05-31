import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Post } from './Post';

function App() {

  // const config = useMemo(
  //   () => ({ method: 'get', baseURL: 'https://jsonplaceholder.typicode.com/posts/1' }),
  //   []
  // );
  // const [post2] = useAxios(config);
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Post />
    </>
  );
}

export default App;
