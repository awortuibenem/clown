
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import './src/App.css';

import clownCoinLogo from './src/pfp.png';

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

function App() {
  const [account, setAccount] = useState('');

  useEffect(() => {
    async function load() {
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
    }
    load();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={clownCoinLogo} className="App-logo" alt="Clown Coin Logo" />
        <h1>Poco's Crypto Classroom</h1>
        <p>Connected account: {account}</p>
        <button className="claim-button">Claim 10 CLOWN</button>
      </header>
    </div>
  );
}

export default App;
