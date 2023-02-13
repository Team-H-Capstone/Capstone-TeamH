import React, { useEffect, useState } from 'react';
import { data } from './quotes-data';

const Quotes = () => {
  const [quotes, setQuotes] = useState(data);
  let i = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[i]);

    // console.log(quote);

  useEffect(() => {
    const first = setInterval(() => {
      let i = Math.floor(Math.random() * quotes.length);
      const qt = quotes[i];
      setQuote(qt);
    }, 15000); //* 15 seconds until new quote
    return () => clearInterval(first);
  }, []);

  return (
    <div className="quote_container">
      <blockquote>{quote.q}</blockquote>
      <p>
        <span className="author-text">{quote.a}</span>
      </p>
    </div>
  );
};

export default Quotes;
