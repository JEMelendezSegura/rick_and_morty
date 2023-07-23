import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 826) + 1; // antes el 5 es 826 por la cantidad de pj que hay
    setId(randomNumber.toString());
    onSearch(randomNumber.toString());
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Personaje Aleatorio</button>
    </div>
  );
}
