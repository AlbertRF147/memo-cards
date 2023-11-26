import { act } from 'react-dom/test-utils'
import { ICard } from '../@types/cards'
import { cardUtils } from '../utils'

const _cards = [
  {
    value: 1,
    flipped: true,
    solved: false,
    position: 0
  },
  {
    value: 2,
    flipped: false,
    solved: true,
    position: 1
  },
  {
    value: 1,
    flipped: true,
    solved: false,
    position: 2
  },
  {
    value: 2,
    flipped: false,
    solved: true,
    position: 3
  },
]

const { flipCard, solveCard, flipBackAll, generateCards } = cardUtils(_cards)


test('should flip a card', () => {
  let testCards = _cards
  const cardToFlipPosition = 1
  
  expect(testCards[cardToFlipPosition].flipped).toBeFalsy()

  act(() => {
    testCards = flipCard(cardToFlipPosition)
    flipCard
  })

  expect(testCards[cardToFlipPosition].flipped).toBeTruthy()
})

test('should solve a card', () => {
  let testCards = _cards
  const cardToFlipPosition = 0
  
  expect(testCards[cardToFlipPosition].solved).toBeFalsy()

  act(() => {
    testCards = solveCard(cardToFlipPosition)
  })

  expect(testCards[cardToFlipPosition].solved).toBeTruthy()
})

test('should flip all cards back', () => {
  let testCards = _cards
  
  expect(testCards.some(_card => _card.flipped)).toBeTruthy()

  act(() => {
    testCards = flipBackAll()
  })

  expect(testCards.some(_card => _card.flipped)).toBeFalsy()
})

test('generate a bunch of cards', () => {
  const numOfCards = 10
  let testCards: ICard[] | [] = []

  
  expect(testCards).not.toHaveLength(numOfCards)

  act(() => {
    testCards = generateCards(numOfCards)
  })

  expect(testCards).toHaveLength(numOfCards)

  testCards.forEach((testCard, i) => {
    expect(testCard).toHaveProperty('position', i);
    expect(testCard).toHaveProperty('flipped', false);
    expect(testCard).toHaveProperty('solved', false);
    expect(testCard).toHaveProperty('value', Math.floor(i / 2) + 1);
  });
})
