import { ResetTvRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const cardImages = [
    {"src": "/img/beach.jpeg", matched: false},
    {"src": "/img/lake.webp", matched: false},
    {"src": "/img/mountain.jpeg", matched: false},
    {"src": "/img/northernLights.jpeg", matched: false},
    {"src": "/img/stream.jpeg", matched: false},
    {"src": "/img/tree.jpeg", matched: false},
    {"src": "/img/fall.jpeg", matched: false},
    {"src": "/img/jupiter.jpeg", matched: false},
    {"src": "/img/plains.jpeg", matched: false},
    {"src": "/img/space.jpeg", matched: false},
    {"src": "/img/iceberg.jpeg", matched: false},
    {"src": "/img/north.jpeg", matched: false},
    {"src": "/img/path.jpeg", matched: false},
    {"src": "/img/waterfall.jpeg", matched: false},
]

const MemoryGame = () => {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setCards(shuffledCards)
        setTurns(0)
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {

            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(()=> resetTurn(), 1000)
            }
        }

    }, [choiceOne, choiceTwo])

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns +1)
    }

    console.log(cards)

    return (
        <div className="memoryGame">
            <h1 className="memoryGameTitle">Memory Game!</h1>
            <button className="memoryGameButton" onClick={shuffleCards}>New Game</button>

            <div className="cardGrid">
                {cards.map(card => (
                  <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched}/>  
                ))}
            </div>
        </div>
    );
}

export default MemoryGame;