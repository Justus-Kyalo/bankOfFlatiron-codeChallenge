import React, { useEffect, useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  function handleClick(event) {
    event.preventDefault()
    console.log(query)
  }
  return (
    <div className="input-group mb-3">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Search transaction by category or description"
        aria-label="Seatch transaction"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button onClick={handleClick} className="btn btn-primary" type="button">
          Search
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
