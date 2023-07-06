import { useState, useEffect } from "react";
import './RandomQuote.css'



export default function RandomQuote() {
    const [quote, setQuote] = useState('')
    const randomRgb = () => {
        const { round, random } = Math;
        const rgb = () => round(random() * 255)
        return `rgb(${rgb()},${rgb()},${rgb()})`;
    };
    const [classs, setClass] = useState({ fade: false, color: randomRgb() })
    const logic = classs.fade ? 'fade-in' : 'fade-out'
    useEffect(() => {
        if (quote) {
            setClass({ fade: true, color: randomRgb() })
        }
    }, [quote]);

    function removeClass() {
        setClass({ ...classs, fade: false })
    }
    async function getRandomQuote() {
        removeClass()
        const getData = await fetch("https://type.fit/api/quotes")
        const data = await getData.json()
        const random = Math.floor(Math.random() * data.length)
        setQuote({ quote: data[random].text, author: data[random].author })
    }
    return (
        <div className="quoteWrapper" style={{ backgroundColor: classs.color, transition: '1s' }}>
            <div className="quote-body">
                <div id="quote-box" >
                    {!quote && <h2 style={{ color: classs.color }}>Click Get quotes to generate a random quote</h2>}
                    <h2 id='text' className={logic}
                        style={{ color: classs.color }}>
                        &ldquo;{quote.quote}&rdquo;
                    </h2>
                    <h3 id='author' className={logic} style={{ color: classs.color }}>- {quote.author ? quote.author : 'Baaz Cheema'}</h3>
                    <button id='new-quote'
                        onClick={getRandomQuote}
                        style={{ color: "white", backgroundColor: classs.color }}
                        className="transition"
                    >Get Quote</button>
                    <a id='tweet-quote'
                        className="transition"
                        style={{ backgroundColor: classs.color }}
                        href={`https://twitter.com/intent/tweet?text=${quote.quote} -${quote.author}`}>
                        <img src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png' />
                    </a>
                </div >
            </div>
        </div>
    )
}