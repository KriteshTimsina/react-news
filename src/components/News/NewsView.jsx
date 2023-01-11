import React from 'react';
import { useState } from 'react';

import './News.scss';
import ReactHeart from './ReactHeart';


const NewsView = ({ data }) => {
    const displayData = data.map(({ objectID, title, url, author, num_comments }) => {
        return (
            <div className='news-wrapper' key={objectID}>
                <h4 className='news-title'>{title}</h4>
                <h4 className='author'>By <span className='author-name'>{author} | {num_comments}</span> comments</h4>
                <div className="links">
                    <a className='read-more' href={url} target="_blank">Read more</a>
                    <ReactHeart />
                </div>
            </div>
        )
    })
    return displayData;
}

export default NewsView

