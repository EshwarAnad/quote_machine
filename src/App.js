import React from 'react';
import QuoteBox from './components/QuoteBox';

import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      quotes: [],
      currentQuote: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(response => response.json())
    .then(data => {
      let currentQuote = data.quotes[Math.floor(Math.random()*data.quotes.length)];
      this.setState({
        quotes: data.quotes,
        currentQuote
      });
    });
  }
  handleClick(){
    this.setState({
      currentQuote: this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)]
    })
  }
  render(){
    return (
      <div className="App">
        <p>some stuff being tested here</p>
        <QuoteBox quoteData={this.state.currentQuote} click={this.handleClick} />
      </div>
    );
  }
}

export default App;
