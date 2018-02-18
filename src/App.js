import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';



class App extends Component {
  constructor() {
    super()
    this.state = {
      btc: '',
      eth: '',
      ltc: '',
      bch: ''
    }
    // this.getBtc = this.getBtc.bind(this)
    this.getBtc()
    this.getEth()
    this.getLtc()
    this.getBch()
  }
    getBtc () {
      fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot')
        .then((response) => {
          return response.json()
        }).then((json) => {
          this.setState({
            btc: json.data.amount
          })
        }).then(() => {
          console.log('BTC', this.state.btc)
        })
    }
    getEth() {
      fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot')
        .then((response) => {
          return response.json()
        }).then((json) => {
          this.setState({
            eth: json.data.amount
          })
        }).then(() => {
          console.log('ETH', this.state.eth)
        })
    }
    getLtc() {
      fetch('https://api.coinbase.com/v2/prices/LTC-USD/spot')
        .then((response) => {
          return response.json()
        }).then((json) => {
          this.setState({
            ltc: json.data.amount
          })
        }).then(() => {
          console.log('LTC', this.state.ltc)
        })
    }
    getBch() {
      fetch('https://api.coinbase.com/v2/prices/BCH-USD/spot')
        .then((response) => {
          return response.json()
        }).then((json) => {
          this.setState({
            bch: json.data.amount
          })
        }).then(() => {
          console.log('BCH', this.state.bch)
        })
    }
      
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
