import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, onClick }) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card, feedback)}>
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )

export class CardGame extends React.Component {
    
handleCardClick(card, feedback) {
    console.log(feedback, 'clicked')
  }

    render() {
        return (
            <div className="memory">
        <Card card="😀" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onClick={this.handleCardClick} />
        <Card card="💖" feedback="justMismatched" onClick={this.handleCardClick} />
        <Card card="🎩" feedback="visible" onClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onClick={this.handleCardClick} />
      </div>
        )
      }
}
