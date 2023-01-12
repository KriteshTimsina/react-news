import React from 'react'
import './News.scss';
import './LoadingAnimation.scss'
import { useGlobalContext } from '../../Context';
import ReactHeart from './ReactHeart';

const News = () => {

  const { hits, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="clock-loader"></div>
    )
  }

  return (
    <>
      {
        hits.map(({ objectID, title, author, num_comments, url }) => {
          return (
            <div className='news-container' key={objectID}>
              <div className='news-wrapper' >
                <h4 className='news-title'>{title}</h4>
                <h4 className='author'>By <span className='author-name'>{author} | {num_comments}</span> comments</h4>
                <div className="links">
                  <a className='read-more' href={url} target="_blank">Read more</a>
                  <ReactHeart />
                </div>
              </div>
            </div>
          )
        })
      }

    </>
  )
}

export default News


