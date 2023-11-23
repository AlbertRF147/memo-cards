import { ICard } from "../@types/cards"

export default function useCardUtils(cards: ICard[]) {
  const toggleCardVal = (cardPosition: number, key: "flipped" | "solved") => {
    const [card] = cards.filter((_card, index) => {
      return (index === cardPosition)
    })
    const updatedCard = { ...card, [key]: !card[key] }
    const newCards = [...cards]
    newCards[cardPosition] = updatedCard
    return newCards
  }

  const flipCard = (cardPosition: number) => toggleCardVal(cardPosition, "flipped")
  const solveCard = (cardPosition: number) => toggleCardVal(cardPosition, "solved")

  const flipBackAll = () => cards.map(card => ({ ...card, flipped: false }))

  const shuffleCards = () => [...cards].sort(() => Math.random() - 0.5)

  const generateCards = (numOfCards: number) => {
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

  return { flipCard, solveCard, flipBackAll, shuffleCards, generateCards }
}
