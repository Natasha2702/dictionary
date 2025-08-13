import React, {useState} from "react";
import axios from "axios";
import './Dictionary.css'; 

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for "${keyword}" definition`);

    let apiKey = "e6taed4cb9ef5dfoaff8f35a499504ef";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word..."
          onChange={handleKeywordChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}