import React, { useState, useRef, useEffect } from 'react';
import { GithubContext } from '../context/context';

const Data = () => {
  const { gists } = React.useContext(GithubContext);

  const [isItemActive, setIsItemActive] = useState(false);
  const [activeId, setActiveID] = useState('');
  const [startFade, setStartFade] = useState(false);
  const prevId = useRef('');
  const currentImg = useRef('');

  useEffect(() => {
    // track previous state of id
    prevId.current = activeId;
  }, [activeId]);

  function toggleActive(id) {
    if (id !== prevId.current) {
      setIsItemActive(true);
    } else {
      setIsItemActive(!isItemActive);
    }
  }

  function startFading(e) {
    setStartFade(true);
    setTimeout(() => {
      setStartFade(false);
    }, 1000);
  }

  return (
    <>
      {gists &&
        gists.map(({ id, owner: { avatar_url }, files }) => {
          const file = Object.keys(files);
          return (
            <div
              className='row item'
              key={id}
              data-id={id}
              onClick={(e) => {
                toggleActive(e.target.attributes['data-id'].value);
                setActiveID(e.target.attributes['data-id'].value);
                currentImg.current = avatar_url;
                startFading(e);
              }}
            >
              <div className='one column'>
                <img
                  data-id={id}
                  className={id === activeId ? `item-active` : ''}
                  src={avatar_url}
                  alt='avatar'
                  style={{ height: '50px' }}
                />
              </div>
              <div
                data-id={id}
                className={
                  id === activeId ? `ten columns item-active` : 'ten columns'
                }
              >
                {file[0]}
              </div>
              {isItemActive && (
                <div
                  className={startFade ? `fade fade-visible` : 'fade'}
                  style={{ pointerEvents: 'none' }}
                >
                  <img src={currentImg.current} alt='' />
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};

export default Data;
