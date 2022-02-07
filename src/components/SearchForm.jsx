import React, { useState } from "react";

function SearchForm(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleSubmit(event) {
    event.preventdefault();
    props.onSearch({ name, type });
  }

  return (
    <form>
      <input
        className="nameInput"
        type="text"
        placeholder="name of pokemon"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className="typeInput"
        type="text"
        placeholder="type of pokemon"
        value={type}
        onChange={handleTypeChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}
export default SearchForm;
