import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'
import { CardsContextType } from '../@types/cards'
import { Card } from '../components/Card'

export const Cards = () => {
  const { cards } = useContext(AppContext) as CardsContextType

  return (
    <div className='cards grid grid-cols-2 gap-3 p-4'>
      {cards.map((cardProps, index) => <Card key={`card-${index}`} {...cardProps} cardPosition={index} />)}
    </div>
  )
}
