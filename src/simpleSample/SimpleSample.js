import React, { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
      .then(response => response.json())
      .then(data => setQuote(data));
  }, []);

  return (
    <>
      <h1>Random Quote</h1>
      {quote.id && (
        <p data-testid="quote-wrapper">
          {quote.en} by <b>{quote.author}</b>
        </p>
      )}
    </>
  );
}