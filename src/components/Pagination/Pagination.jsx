import React from 'react';
import { useGlobalContext } from '../../Context';
import './pagination.scss';

export default function Pagination() {
  const { handlePreviousChange, handleNextChange, page, nbPages } = useGlobalContext();

  return (
    <div className='pagination-container'>
      <a onClick={handlePreviousChange} className='toggle-btn' href="#">
        Prev
      </a>
      <pre>  {page + 1} of {nbPages}  </pre>
      {/* <p>{pages} of {nb_pages}</p> */}
      <a onClick={handleNextChange} className='toggle-btn' href="#">
        Next
      </a>
    </div>
  )
}
