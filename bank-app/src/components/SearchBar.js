import React, { useState } from "react";

function SearchBar({onSearchQuery ,onHandleReset} ) {
  const [query, setQuery] = useState("");

  function handleClick(event) {
    event.preventDefault()
    onSearchQuery(query)
  }
  function handleReset(event){
    event.preventDefault()
    onHandleReset();
    
  }
  return (
    <div className="input-group mb-3">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Search transaction by category "
        aria-label="Seatch transaction"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button onClick={handleClick} className="btn btn-primary" type="button">
          Search
        </button>
        <button onClick={handleReset} className="btn btn-outline-primary" type="button">
          reset
        </button>

      </div>
    </div>
  );
}
export default SearchBar;
