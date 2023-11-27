import * as React from 'react'
import { ICard, BoardContextType, numCardsToPlay } from '../@types/cards'
import { generateCards, shuffleCards } from '../utils'

export const AppContext = React.createContext<BoardContextType | null>(null!)

const AppProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const [numCardsToPlay, setNumCardsToPlay] = React.useState<numCardsToPlay>(6)
  const _cards = generateCards(numCardsToPlay)
  const shuffledCards = shuffleCards(_cards)
  const [cards, setCards] = React.useState<ICard[]>(shuffledCards)

  React.useEffect(() => {
    const newCards = generateCards(numCardsToPlay)
    const shuffledNewCards = shuffleCards(newCards)
    setCards(shuffledNewCards)
  }, [numCardsToPlay])

  return (
    <AppContext.Provider value={{ cards, setCards, numCardsToPlay, setNumCardsToPlay }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
