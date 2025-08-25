import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css'; 

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults]= useState(null);

  function handleResponse(response) { 
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
  
   let apiKey = "e6taed4cb9ef5dfoaff8f35a499504ef";
   let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);}


  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary text-center">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word..."
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results}/>
    </div>
  );
}