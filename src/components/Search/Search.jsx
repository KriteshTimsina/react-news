import React from 'react';
import { useGlobalContext } from '../../Context';
import './Search.scss';

const Search = () => {
  const { query, setSearch } = useGlobalContext();
  return (
    <div className="search-container">
      <form className="input">
        <input
          value={query}
          onChange={(e) => setSearch(e.target.value)}
          type="text" placeholder='Eg: React' />
      </form>
    </div>
  )
}

export default Search;