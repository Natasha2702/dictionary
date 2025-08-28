import React from "react";

export default function Phonetic(props){
    if(props.phonetic){
       return( 
       <div className="Phonetic"> 
       <a href={props.phonetic} target="_blank" rel="noreferrer">Listen</a>
       <h2>{props.phonetic}</h2>
       </div>
 );
}else{
    return null;
}
}