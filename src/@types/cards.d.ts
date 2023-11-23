export interface ICard {
  value: number
  flipped: boolean
  solved: boolean
  position: number
}

export type ToggleCardValType = (cardPosition: number, key: 'flipped' | 'solved') => ICard
export type SaveCardType = (card: ICard) => void
export type FlipCardType = (cardPosition: number) => void
export type GetFilteredType = () => ICard[]

export type CardsContextType = {
  cards: ICard[] | []
  setCards: (cards: ICard[]) => void
}
