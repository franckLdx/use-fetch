import React, { useMemo } from 'react';
import { useFetch, useAxios } from 'react-use-query';
import logo from './logo.svg';
import './App.css';

function App() {

  const [post] = useFetch('https://jsonplaceholder.typicode.com/posts/1');
  const config = useMemo(
    () => ({ method: 'get', baseURL: 'https://jsonplaceholder.typicode.com/posts/1' }),
    []
  );
  const [post2] = useAxios(config);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {(post.state === 'error') &&
          'Oups, Sorry but something goes wrong'
        }
        {(post.state === 'loading') &&
          'Please wait...'
        }
        {(post.state === 'loaded') &&
          'Loaded'
        }
      </header>
    </div>
  );
}

export default App;
