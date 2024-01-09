import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);

  useEffect(() => {
    generatePassword()
  }, [length, symbol, number, uppercase, lowercase])

  function includeNumber(e) {
    setNumber(e.target.checked);
  }

  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }

  function includeUppercase(e) {
    setUppercase(e.target.checked);
  }

  function includeLowercase(e) {
    setLowercase(e.target.checked);
  }

  function generatePassword() {
    let pass = '';
    let str =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) {
      str += '0123456789';
    }
    if (symbol) {
      str += '/><$#@!%^&*'
    }
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() *
        str.length);
      let char = str.charAt(randomNumber);
      pass += char;
    }

    setPassword(pass);

  }


  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };


  return (
    <>
      <div className='container'>
        <h1 className="container">Generate Password</h1>
        <h2 className="head">{password}</h2>
        < hr />

        <div className="slider-container">
          <label className="label" htmlFor="length">
            Length: {length}
          </label>
          <div className="slider-wrapper">
            <input
              type="range"
              id="length"
              min={5}
              max={20}
              onChange={(e) => setLength(e.target.value)}
              value={length}
              className="slider"
            />
          </div>
        </div>

        <label className="label" htmlFor="number">Number</label>
        <input type="checkbox" id='number' onChange={includeNumber} />

        <label className="label" htmlFor="symbol">Symbol</label>
        <input type="checkbox" id='symbol' onChange={includeSymbol} />

        <label className="label" htmlFor="uppercase">Uppercase</label>
        <input type="checkbox" id='uppercase' onChange={includeUppercase} />

        <label className="label" htmlFor="lowercase">Lowercase</label>
        <input type="checkbox" id='lowercase' onChange={includeLowercase} />


        <div className="slider-container">
          { }
        </div>

        { }

        { }
        <button className="copy-button" onClick={copyToClipboard}>Copy Password</button>
      </div>

    </>
  )
}

export default App
