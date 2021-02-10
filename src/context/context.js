import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [gists, set30Gists] = useState('');
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const search30GithubGists = async () => {
    setIsLoading(true);
    const { data } = await axios(
      `https://api.github.com/gists/public?pages=${pageNum}&per_page=30`
    ).catch((err) => console.error(err));
    setIsLoading(false);
    return data;
  };

  useEffect(async () => {
    const arrayOf30Gists = await search30GithubGists();
    set30Gists(arrayOf30Gists || 'No gists data found');
  }, [pageNum]);

  return (
    <GithubContext.Provider
      value={{
        search30GithubGists,
        gists,
        pageNum,
        setPageNum,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
