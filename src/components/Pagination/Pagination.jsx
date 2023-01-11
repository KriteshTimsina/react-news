import React from 'react';
import './pagination.scss';

export default function Pagination() {
  return (
    <div className='pagination-container'>
      <a className='toggle-btn' href="#">
        Prev 
      </a>
      <pre>  1 of 50  </pre>
      {/* <p>{pages} of {nb_pages}</p> */}
      <a className='toggle-btn' href="#">
         Next
      </a>
    </div>
  )
}
