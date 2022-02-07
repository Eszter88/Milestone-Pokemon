import React from "react";
import Type from "./Type";

function Pokemon(props) {
  return (
    <div className="pokCard">
      <h1 className="pokName">{props.name}</h1>
      <img className="circle-img" src={props.img} alt="pokemon" />
      {props.type.map((type) => {
        return <Type key={type} type={type} />;
      })}
    </div>
  );
}

export default Pokemon;
