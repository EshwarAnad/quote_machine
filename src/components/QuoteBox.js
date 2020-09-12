import React from 'react';

const QuoteBox = (props)=> {
    let {quote, author} = props.quoteData;
    let url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote}${author}`)}`;
    return (
        <div id="quote-box">
            <p id="text">
            <b>{quote}</b> 
            </p>
            <p id="author">
            <i>-{author}</i> 
            </p>
            <a href={url} id="tweet-quote">Tweet this quote</a>
            <button id="new-quote" onClick={props.click}>New Quote</button>
        </div>
    );
}

export default QuoteBox;