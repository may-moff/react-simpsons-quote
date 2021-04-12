import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quote }) {
    return (
        quote && (
        <div className='QuoteCard'>
            <img src={quote.image} alt={quote.character} />
            <h1>{quote.character} says while looking to the {quote.characterDirection} side:</h1>
            <h2>{quote.quote}</h2>
            
        </div>
        )
    )
}

export default QuoteCard

// quote: the quote's text
// character: who said the quote
// image: the character's image
// characterDirection: direction the character faces (left or right)


// The application should include: A button to retrieve a quote, an area where the name of the character, the photo and the quote is displayed (it is possible to reuse code from previous quests, namely the QuoteCard component)

// function myFunc({name, age}) {

// }