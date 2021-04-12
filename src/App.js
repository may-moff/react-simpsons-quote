import axios from "axios";
import React, { useState, useEffect } from "react";
import QuoteCard from './components/QuoteCard';
import './App.css';


const defaultQuote = {
  quote: "Oh Yeah!",
  character: "Duffman",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
  characterDirection: "Left"
};

function App() {
  const [quote, setQuote] = useState(defaultQuote);

  
  const simpsonsQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
      .then((res) => res.data)
      .then((data) => setQuote(data[0]));
  };

  return (
    <>
    <QuoteCard quote={quote} />
    <button type="button" onClick={simpsonsQuote}>Gimme yummy Simpsons quote</button>
    </>
  );
}

export default App;
// quote: the quote's text
// character: who said the quote
// image: the character's image
// characterDirection: direction the character faces (left or right)