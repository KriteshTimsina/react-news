import React from 'react';
import './Search.scss';

const Search = ({setText,text,setSaveText}) => {
  function handleFormSubmit(e){
    setSaveText(text);
    e.preventDefault();
  }
  return (
    <div className="search-container">
      <form onSubmit={handleFormSubmit} className="input">
        <input onChange={e=>setText(e.target.value)}
           type="text" placeholder='Eg: React' />
      </form>
    </div>
  )
}

export default Search;