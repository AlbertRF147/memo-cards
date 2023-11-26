import * as React from 'react'
import { ICard, BoardContextType } from '../@types/cards'
import { generateCards, shuffleCards } from '../utils'

export const AppContext = React.createContext<BoardContextType | null>(null!)

const AppProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const _cards = generateCards(10)
  const shuffledCards = shuffleCards(_cards)
  const [cards, setCards] = React.useState<ICard[]>(shuffledCards)

  return (
    <AppContext.Provider value={{ cards, setCards }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
