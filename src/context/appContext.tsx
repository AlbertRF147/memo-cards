import * as React from 'react'
import { ICard, CardsContextType, ToggleCardValType, SaveCardType } from '../@types/cards'

export const AppContext = React.createContext<CardsContextType | null>(null!)

const AppProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const [cards, setCards] = React.useState<ICard[]>([
    {
      value: 1,
      flipped: false,
      solved: false,
      position: 0
    },
    {
      value: 2,
      flipped: false,
      solved: false,
      position: 1
    },
    {
      value: 1,
      flipped: false,
      solved: false,
      position: 2
    },
    {
      value: 2,
      flipped: false,
      solved: false,
      position: 3
    },
  ])

  return (
    <AppContext.Provider value={{ cards, setCards }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
