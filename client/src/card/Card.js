import React from 'react'
import shuffle from 'lodash/shuffle'
import HallOfFame, { FAKE_HOF } from './HallOfFame'

import './Card.css'

const HIDDEN_SYMBOL = '❓'
const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

const Card = ({ card, feedback, onClick }) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card, feedback)}>
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )

var cards = ({}) => {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

function handleCardClick(card, feedback) {
    console.log(feedback, 'clicked')
  }
const won = true;

export class CardGame extends React.Component {
    render() {
        return (
            <div className="memory">
        <Card card="😀" feedback="hidden" onClick={handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={handleCardClick} />
        <Card card="💖" feedback="justMismatched" onClick={handleCardClick} />
        <Card card="🎩" feedback="visible" onClick={handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={handleCardClick} />
        {won && <HallOfFame entries={FAKE_HOF} />}
      </div>
        )
      }
}
