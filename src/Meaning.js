import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
if (props.meaning){
  return(<div className="Meaning">
      
        <h3>{props.meaning.partOfSpeech}</h3>
        <div className="difinition">
       <strong>Definition:</strong>{props.meaning.definition}
        </div>
        <div className="example">
     <em><strong>Example:</strong>{props.meaning.example}</em>
     </div>

     <Synonyms synonyms={props.meaning.synonyms}/>
     </div>
);
}else{return null;

}
}