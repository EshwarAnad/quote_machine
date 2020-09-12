import React from 'react';

const QuoteBox = (props)=> {

    return (
        <div id="quote-box">
            <p id="text">
            {props.quoteData.quote} 
            </p>
            <p id="author">
            {props.quoteData.author} 
            </p>
            <button id="new-quote" onClick={props.click}>New Quote</button>
            <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet this quote</a>
        </div>
    );
}

export default QuoteBox;