import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { useStyles } from './hooks/useStyles'
import PlayArea from './components/PlayArea'
import Border7Buttons from './components/Border7Buttons'
import Message from './components/Message'
import GameProgressButton from './components/GameProgressButton';

const initialDeck = getDeck()
console.log(initialDeck)

function getDeck() {
  const suits = ['♠', '♣', '♥', '♦']
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const deck = []

  suits.forEach((suit) => ranks.forEach((rank) => deck.push({ suit: suit, rank: rank })))
  return deck
}

function getRankNum(rank) {
  switch (rank) {
    case 'A':
      return 1
    case 'J':
      return 11
    case 'Q':
      return 12
    case 'K':
      return 13
    default:
      return Number(rank)
  }
}

export default function Border7() {
  const classes = useStyles()
  const [deck, setDeck] = useState(initialDeck)
  const [card, setCard] = useState(null)
  const [isWin, setIsWin] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [winCount, setWinCount] = useState(0)
  const [loseCount, setLoseCount] = useState(0)

  function getCard() {
    const index = Math.floor(Math.random() * deck.length)
    const cardObj = deck[index]

    const newDeck = deck.slice()
    newDeck.splice(index, 1)
    setDeck(newDeck)
    return cardObj
  }

  function checkOver() {
    const _card = getCard()
    setCard(_card)

    const isWin = getRankNum(_card.rank) > 7
    setIsWin(isWin)

    isWin ? setWinCount(winCount + 1) : setLoseCount(loseCount + 1)
    setAnswered(true)
  }

  function check7() {
    const _card = getCard()
    setCard(_card)

    const isWin = getRankNum(_card.rank) === 7
    setIsWin(isWin)

    isWin ? setWinCount(winCount + 1) : setLoseCount(loseCount + 1)
    setAnswered(true)
  }

  function checkUnder() {
    const card = getCard()
    setCard(card)

    const isWin = getRankNum(card.rank) < 7
    setIsWin(isWin)

    isWin ? setWinCount(winCount + 1) : setLoseCount(loseCount + 1)
    setAnswered(true)
  }

  function next() {
    if (deck.length === 0) {
      setIsGameFinished(true)
    } else {
      setCard(null)
      setAnswered(false)
    }
  }

  function getButtons() {
    return answered ? (
      <GameProgressButton onClickNext={next} isTheLastGame={deck.length === 0} />
    ) : (
      <Border7Buttons onClickOver={checkOver} onClick7={check7} onClickUnder={checkUnder} />
    )
  }

  function getMessage() {
    let message = []
    if (isGameFinished) {
      message.push('Thank you for playing!')
      message.push(`Win: ${winCount} Lose: ${loseCount}`)
    } else if (answered) {
      message.push(isWin ? 'Win!' : 'Lose!')
    } else {
      message.push('Over or Under?')
    }

    return <Message>{message}</Message>
  }

  return (
    <Box>
      <PlayArea card={card} />
      <Box /* className={classes.messageArea} */>
        {getMessage()}
        {getButtons()}
      </Box>
    </Box>
  )
}

