import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 826) + 1;
    setId(randomNumber.toString());
    onSearch(randomNumber.toString());
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Personaje Aleatorio</button>
    </div>
  );
}
