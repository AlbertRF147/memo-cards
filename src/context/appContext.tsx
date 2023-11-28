import * as React from 'react'
import { ICard, BoardContextType, numCardsToPlay } from '../@types/cards'
import { generateCards, shuffleCards } from '../utils'

export const AppContext = React.createContext<BoardContextType | null>(null!)

const AppProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const [numCardsToPlay, setNumCardsToPlay] = React.useState<numCardsToPlay>(6)
  const _cards = generateCards(numCardsToPlay)
  const shuffledCards = shuffleCards(_cards)
  const [cards, setCards] = React.useState<ICard[]>(shuffledCards)

  const restart = React.useCallback((callback?: () => void) => {
    const newCards = generateCards(numCardsToPlay)
    const shuffledNewCards = shuffleCards(newCards)
    setCards(shuffledNewCards)
    if (callback) callback()
  }, [numCardsToPlay])

  React.useEffect(() => {
    restart()
  }, [numCardsToPlay, restart])

  return (
    <AppContext.Provider value={{ cards, setCards, numCardsToPlay, setNumCardsToPlay, restart }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
