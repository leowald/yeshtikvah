import React from "react";
import { createContext, useContext } from "react";
import categoryContext from "./store/categoryContext";

export default function ViaApp() {
  const { categories, error } = useContext(categoryContext);
  //const { categories, error } = object;
  console.log("viaApp:", categories);
  return (
    <div>
      <h3>my categories:</h3>
      {categories &&
        categories.map(function (category) {
          return <p>id: {category.name}</p>;
        })}
      {error && <p> error {error}</p>}
    </div>
  );
}
