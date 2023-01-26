import React from 'react';

const cardImages = [
    {"src": "/img/beach.jpeg"},
    {"src": "/img/lake.webp"},
    {"src": "/img/mountain.jpeg"},
    {"src": "/img/northernLights.jpeg"},
    {"src": "/img/stream.jpeg"},
    {"src": "/img/tree.jpeg"}
]

const MemoryGame = () => {

    return (
        <div className="memoryGame">
            <h1 className="memoryGameTitle">Memory Game!</h1>
            <button className="memoryGameButton">New Game</button>
        </div>
    );
}

export default MemoryGame;