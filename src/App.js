import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [data, setData] = useState(0);

  function getQuote(){
    fetch('https://api.quotable.io/random').then(
      response => response.json()).then(
        (quote)=>{
          setData(quote)
        }
      )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Head">Random Quote Generator</h1>
        <h3 className="Quote">{data.content}</h3>
        <h4 className="Author">~{data.author}</h4>
        <button className="Button" onClick={getQuote}>Get Quote</button>
        <br/>
        <br/>
        <p>Made by Aditya Gupta</p>
      </header>
    </div>
  );
}

export default App;
