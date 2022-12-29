import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import QuoteBox from "./components/QuoteBox";
import Button from "./components/Button";
import QuotesData from "./quotes_data/quotes.json"

import { useState } from "react";

function App() {

  const [Quoteindex, setQuoteIndex] = useState(Math.floor(Math.random() * QuotesData.quotes.length)); 
  
  const nextQuote = () => {
    const newQuoteIndex = Math.floor(Math.random() * QuotesData.quotes.length);
    setQuoteIndex(newQuoteIndex);
  };

  return (
    <div className="App container d-flex align-items-center justify-content-center">
      <div className="main-container p-3 rounded d-flex align-items-center justify-content-center flex-column shadow-lg" id="quote-box">
        <div className="quote-main-container d-flex align-items-center justify-content-center text-center p-2">
          <QuoteBox
            quote={QuotesData.quotes[Quoteindex].quote}
            author={QuotesData.quotes[Quoteindex].author}
          />
        </div>
        <div className="buttons-container p-2">
          <Button 
          text={<i className="bi bi-twitter"></i>}
          type="tweet"
          />
          <Button
          text="New quote"
          handleClick={nextQuote}
          type="next"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
