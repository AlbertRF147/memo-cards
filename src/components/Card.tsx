import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'
import { CardsContextType } from '../@types/cards'

type CardProps = {
  value: number
  flipped: boolean
  solved: boolean
  cardPosition: number
}

export const Card = ({ value, flipped, solved, cardPosition }: CardProps) => {
  const { saveCard, toggleCardVal } = useContext(AppContext) as CardsContextType

  const handleOnCardClick = (cardPosition: number) => {
    const card = toggleCardVal(cardPosition, 'flipped')
    saveCard(card, cardPosition)
  }

  return (
    <div className='card border p-3 text-center rounded cursor-pointer' onClick={() => handleOnCardClick(cardPosition)}>
      {flipped
        ? value
        : '???'
      }
    </div>
  )
}
