import React, { useState } from 'react';
import '../styles/Card-post.css';
import Tag from './Tag';
import getCardSize from '../utility/cardSize';
import milisegundosPasados from '../utility/milisegundosPasados';
import fechaTexto from '../utility/fechaTexto';

function Card({ title, subreddit, selftext, score, permalink, created, thumbnail }) {
    const [flipped, setFlipped] = useState(false);
    //const hasSelftext = selftext && selftext.trim().length > 0;
    const hasSelftext = selftext;
    const hasThumbnail = (thumbnail !== "self");

    const flipCard = () => {
        if (hasSelftext) {
        setFlipped(!flipped);
        }
    };


    return (
    <div 
        className={`card ${flipped ? 'flipped' : ''} ${getCardSize(score)}`} 
        onClick={flipCard}
    >
        <div className="card-inner">

            <div className={`card-front ${flipped ? 'hidden' : ''}`}>
                <div className="title">
                    <h2 title={title}>
                        {title}
                    </h2>
                </div>
                <div className="author">
                    <h5>
                        by {subreddit[0].toUpperCase() + subreddit.slice(1)}&nbsp;
                        <a href={`https://www.reddit.com${permalink}`} target="blank">
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </a>&nbsp;
                        {hasThumbnail && 
                        (<i class="fa-solid fa-image"></i>)}
                    </h5>
                    </div>
                <div className="label">
                    <Tag text={"CO2"} color={"gray"}/>
                </div>
                <div className="footer">
                    <div className="date">
                        <i class="fa-regular fa-calendar"></i>&nbsp;
                        {fechaTexto(milisegundosPasados(created))} [{score}]
                    </div>
                    {hasSelftext && (
                    <div className="flipButton">
                        <i class="fa-solid fa-repeat"></i>
                    </div>
                    )}
                </div>
            </div>

            <div className={`card-back ${flipped ? '' : 'hidden'}`}>
                <div className="text">
                    {selftext} 
                </div>
            </div>

        </div>
    </div>

    );
}

export default Card;