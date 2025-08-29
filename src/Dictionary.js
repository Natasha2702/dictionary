import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css'; 

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults]= useState(null);
  let [loaded, setLoaded]= useState(false);
  let [photos, setPhotos]=useState([]);

  
  function handleImages(response){
    setPhotos(response.data.photos)
  }

function handleShecodesResponse(response) { 
setResults(response.data);
let shecodesApiKey="e6taed4cb9ef5dfoaff8f35a499504ef";
let shecodesApiUrl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesApiKey}`;
axios
.get(shecodesApiUrl, {headers: { Authorization: `Bearer ${shecodesApiKey}`}})
.then(handleImages); }


function search(){ let apiKey = "e6taed4cb9ef5dfoaff8f35a499504ef";
   let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleShecodesResponse);}
  


  function handleSubmit(event) {
    event.preventDefault();
    search();}
  
  
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

function load(){
  setLoaded(true);
  search();
}

if (loaded) {
  return (
    <div className="Dictionary">
      <section>
        <h1>What word are we looking for?👀...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word..."
          onChange={handleKeywordChange}
          defaultValue={props.defaultKeyword}
        />
      </form>
      <div className="hint">
      Suggested words: colour, flavour, weather...
      </div>
      </section>
      <Results results={results}/>
      <Photos photos={photos} />
    </div>
  );}else{
    load();
    return "Loading";
  }
}