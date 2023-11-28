export interface ICard {
  value: number
  flipped: boolean
  solved: boolean
  position: number
}

type numCardsToPlay = 6 | 12 | 24

export type ToggleCardValType = (cardPosition: number, key: 'flipped' | 'solved') => ICard
export type SaveCardType = (card: ICard) => void
export type FlipCardType = (cardPosition: number) => void
export type GetFilteredType = () => ICard[]

export type BoardContextType = {
  cards: ICard[] | []
  setCards: (cards: ICard[]) => void
  numCardsToPlay: numCardsToPlay
  setNumCardsToPlay: (numCardsToPlay: numCardsToPlay) => void
  restart: (callback: () => void) => void
}
