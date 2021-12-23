import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import './App.css';

const App = () => {
  const [currentAccount, setCurrentAccount] = useState('')

  const checkEthWalletConnected = async () => {
    /*
     * First make sure we have access to window.ethereum
     */
    const { ethereum } = window

    if (!ethereum) {
      console.log('metamask is not installed, GGWP')
    } else {
      console.log('metamask is here, GLHF')
    }

    /*
     * Check if we're authorized to access the user's wallet
     */
    const accounts = await ethereum.request({method: 'eth_accounts'})
    if (accounts.length > 0) {
      const account = accounts[0]
      console.log('found an account:', account)
      setCurrentAccount(account)
    } else {
      console.log('No account found')
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert('Metamask is not installed, sucks to suck')
      }
      const accounts = await ethereum.request({method: 'eth_requestAccounts'})
      // after metamask is connected, there should always be at least one account
      const account = accounts[0]
      console.log('Connected account from metamask:', account)
      setCurrentAccount(account)
    } catch (err) {
      console.log('could not connect wallet:', err)
    }
  }

  const tweet = () => {
    console.log('TBD')
  }

  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkEthWalletConnected()
  }, [])
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        🇺🇸 Hey there! 🇺🇸
        </div>

        <div className="bio">
        I am Charles and I love to 🏋, 👩, and‍ 
👨‍💻
        </div>

        <button className="waveButton" onClick={tweet}>
          Send me a tweet!
        </button>

        <button className="waveButton" onClick={connectWallet}>
          Connect
        </button>
      </div>
    </div>
  );
}

export default App