import { ICard } from "../@types/cards"

export function cardUtils(cards: ICard[]) {
  const flipCard = (cardPosition: number) => {
    const newCards: ICard[] = [...cards]
    newCards[cardPosition].flipped = !newCards[cardPosition].flipped
    return newCards
  }
  const solveCard = (cardPosition: number) => {
    const newCards: ICard[] = [...cards]
    newCards[cardPosition].flipped = false
    newCards[cardPosition].solved = true
    return newCards
  }

  const flipBackAll = () => cards.map(card => ({ ...card, flipped: false }))

  const getSolved = (cards: ICard[]) => cards.filter(card => card.solved)
  const getFlipped = (cards: ICard[]) => cards.filter(card => card.flipped)

  return { flipCard, solveCard, flipBackAll, generateCards, getSolved, getFlipped }
}

export const shuffleCards = (cards: ICard[]) => [...cards]
  .sort(() => Math.random() - 0.5)
  .map((card, i) => ({...card, position: i }))

export const generateCards = (numOfCards: number) => {
    const card = {
      value: 1,
      flipped: false,
      solved: false,
      position: 0
    }

    return Array.from({ length: numOfCards }, (_, i) => (
      { ...card, position: i, value: Math.floor(i / 2) + 1, }
    ));
  }

