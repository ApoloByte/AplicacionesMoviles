import React from "react";

const name: string = "victor";
const age: number = 23;
const isActive: boolean = false;
const names: string[] = ["Pedro", "Juan", "Julio"];
const person = {
  age: 32,
  name: "victor",
  address: {
    country: "Colombia",
    numberHouse: "22",
  },
};

export const BasicTypes = () => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isActive ? "Activo" : "No Activo"}</p>
      <p>
        <b>Lista: </b> {names.join(", ")}
      </p>
      <p>
        <b>Literal Object: </b> {JSON.stringify(person, null, 2)}
        <p><b>age </b>: {person['age']}</p>
      </p>
    </div>
  );
};

export default BasicTypes
