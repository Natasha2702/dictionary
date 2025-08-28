import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
if (props.meaning){
  return(<div className="Meaning">
      <p>
        <h3>{props.meaning.partOfSpeech}</h3>
       <strong>Definition:</strong>{props.meaning.definition}
        <br />
     <em><strong>Example:</strong>{props.meaning.example}</em>
     </p>
     <Synonyms synonyms={props.meaning.synonyms}/>
     </div>
);
}else{return null;

}
}