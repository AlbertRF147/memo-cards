import {  ICard } from "../@types/cards"

const useUpdateCards = ({ card, cards }: { card: ICard, cards: ICard[] }) => {
  const _cards = cards

  const updatedCards = _cards.filter((_card, index) => {
    return index !== card.position
  })

  updatedCards.splice(card.position, 0, card) // mutating array

  return { updatedCards }
}

export default useUpdateCards
