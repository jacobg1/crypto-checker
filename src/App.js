import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import $ from 'jquery';



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
    showPrices() {
      this.getBtc()
      this.getEth()
      this.getLtc()
      this.getBch()
      let $checkButton = $('.checkButton');
      $checkButton.text("refresh");
    }
      
  render() {
    return (
      <div className="App">
      <div className="header">
        <h1>Price Checker</h1>
      </div>
      <div className="maxWidthContainer">
      <button className="checkButton" onClick={()=>this.showPrices()}>check prices</button>
      <div className="flexContainer">
        <div className="rowOne">
        <div className="bitcoin">
          <h2>Bitcoin</h2>
          <p>{this.state.btc}</p>
        </div>
        <div className="bitcoinCash">
          <h2>Bitcoin Cash</h2>
          <p>{this.state.bch}</p>
        </div>
        </div>
        <div className="rowTwo">
        <div className="etherum">
          <h2>Etherum</h2>
          <p>{this.state.eth}</p>
        </div>
        <div className="litecoin">
          <h2>Litecoin</h2>
          <p>{this.state.ltc}</p>
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
