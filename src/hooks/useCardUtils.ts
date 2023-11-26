import { cardUtils } from "../utils"
import { useAppContext } from "./useAppContext"

export default function useCardUtils() {
  const { cards, setCards } = useAppContext()
  const { flipCard, solveCard, flipBackAll, getSolved, getFlipped } = cardUtils(cards)

  const flipCardState = (cardPosition: number) => {
    const newCards = flipCard(cardPosition)
    setCards(newCards)
  }

  const solveCardState = (cardPosition: number) => {
    const newCards = solveCard(cardPosition)
    setCards(newCards)
  }

  const flipBackAllState = () => {
    const newCards = flipBackAll()
    setCards(newCards)
  }

  return { 
    flipCardState,
    solveCardState,
    flipBackAllState,
    getFlippedState: () => getFlipped(cards),
    getSolvedState: () => getSolved(cards),
  }
}
