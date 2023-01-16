import React, { useState } from "react";

function SearchBar() {
    const [query,setQuery] =useState(" ");

    function handleClick(event){
       setQuery((q) => {q=event.target.value}) 

    }
  return (
    <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Search transaction by category or description" aria-label="Seatch transaction" aria-describedby="basic-addon2" />
    <div className="input-group-append">
      <button className="btn btn-primary" type="button">Search</button>
    </div>
  </div>
  );
}
export default SearchBar;
