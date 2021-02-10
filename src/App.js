import './App.css';
import { GithubContext } from './context/context';
import React from 'react';

import Data from './components/Data';
import Footer from './components/Footer';

function App() {
  const { isLoading } = React.useContext(GithubContext);

  return (
    <>
      {isLoading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='App container page-container'>
          <header className='header'>Gists</header>
          <div className='content-wrap'>
            <Data />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
