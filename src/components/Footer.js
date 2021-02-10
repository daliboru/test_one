import React from 'react';
import { GithubContext } from '../context/context';

const Footer = () => {
  const { setPageNum, pageNum } = React.useContext(GithubContext);

  return (
    <footer className='footer'>
      <div className='row container'>
        <div className='ten columns '>
          Work by{' '}
          <a href='https://www.youtube.com/watch?v=d0C2pzSe5OQ' target='_blank'>
            Dalibor Belic
          </a>
        </div>
        <div className='two columns'>
          {pageNum === 0 ? (
            <button
              disabled
              className='btn btn-disabled'
              style={{ marginRight: '5px' }}
            >
              <svg
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.7218 0.000221811C6.57461 0.0044783 6.43517 0.0640692 6.33225 0.165161L0.666003 5.61347C0.444666 5.8263 0.444666 6.17107 0.666003 6.3839L6.33225 11.8322C6.4739 11.9748 6.68528 12.0323 6.88449 11.9823C7.08258 11.9322 7.23752 11.7833 7.28953 11.5928C7.34155 11.4012 7.28179 11.198 7.13349 11.0618L1.86787 5.99869L7.13349 0.935586C7.3006 0.77916 7.35151 0.539732 7.26076 0.332228C7.1689 0.125788 6.95531 -0.00616307 6.7218 0.000221811Z'
                  fill='#D6D8DA'
                />
              </svg>
            </button>
          ) : (
            <button
              className='btn'
              onClick={() => setPageNum(pageNum - 1)}
              style={{ marginRight: '5px' }}
            >
              <svg
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.7218 0.000221811C6.57461 0.0044783 6.43517 0.0640692 6.33225 0.165161L0.666003 5.61347C0.444666 5.8263 0.444666 6.17107 0.666003 6.3839L6.33225 11.8322C6.4739 11.9748 6.68528 12.0323 6.88449 11.9823C7.08258 11.9322 7.23752 11.7833 7.28953 11.5928C7.34155 11.4012 7.28179 11.198 7.13349 11.0618L1.86787 5.99869L7.13349 0.935586C7.3006 0.77916 7.35151 0.539732 7.26076 0.332228C7.1689 0.125788 6.95531 -0.00616307 6.7218 0.000221811Z'
                  fill='#797C80'
                />
              </svg>
            </button>
          )}
          <button className='btn' onClick={() => setPageNum(pageNum + 1)}>
            <svg
              width='8'
              height='12'
              viewBox='0 0 8 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.08618 0.000221811C1.23337 0.0044783 1.37281 0.0640692 1.47574 0.165161L7.14198 5.61347C7.36332 5.8263 7.36332 6.17107 7.14198 6.3839L1.47574 11.8322C1.33408 11.9748 1.1227 12.0323 0.923498 11.9823C0.725401 11.9322 0.570464 11.7833 0.51845 11.5928C0.466435 11.4012 0.526197 11.198 0.674493 11.0618L5.94012 5.99869L0.674493 0.935586C0.507383 0.77916 0.456475 0.539732 0.547224 0.332228C0.639079 0.125788 0.85267 -0.00616307 1.08618 0.000221811Z'
                fill='#797C80'
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
