

export default function SearchBar({ onSearch }) {

  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 826) + 1; // antes el 5 es 826 por la cantidad de pj que hay
    onSearch(randomNumber.toString());
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Personaje Aleatorio</button>
    </div>
  );
}
