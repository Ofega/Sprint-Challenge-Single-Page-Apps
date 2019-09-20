import React from "react";

export default function SearchForm({ keyword, onSearch, handleInputChange }) {

  return (
    <section className="search-form">
      <form onSubmit={(e) => onSearch(e, keyword)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={keyword}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
