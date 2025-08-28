import React from "react";


export default function Synonyms(props){
if (props.synonyms){
    return(<ul>
    <div className="Synonyms">
{props.synonyms.map(function( synonym, index){
    return <li key={index}>{synonym}</li>;
})}
    </div>
    </ul>
)
}else{
    return "null";
}
} 