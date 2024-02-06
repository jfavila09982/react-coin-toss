import React, { useState } from 'react';
import './App.css';

const CoinFlip = () => {
  const [result, setResult] = useState('');

  const deferFn = (callback, ms) => {
    setTimeout(callback, ms);
  };

  const processResult = (result) => {
    setResult(result.toUpperCase());
  };

  const flipCoin = () => {
    const coinElement = document.getElementById('coin');
    coinElement.setAttribute('class', '');
    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails';
    deferFn(() => {
      coinElement.setAttribute('class', `animate-${result}`);
      deferFn(() => processResult(result), 2900);
    }, 100);
  };

  return (
    <div className="container">
         <h1>Coin Toss</h1>
      <div id="coin">
     
        <div id="heads" className="heads"></div>
        <div id="tails" className="tails"></div>
      </div>
      <button id="flip" onClick={flipCoin}>
        Flip the Coin
      </button>
      <p>
        <span id="status">{result}</span>
      </p>
    </div>
  );
};

export default CoinFlip;
