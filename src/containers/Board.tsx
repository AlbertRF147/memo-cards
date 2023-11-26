import { useContext, useEffect } from 'react'
import { AppContext } from '../context/appContext'
import { BoardContextType, ICard } from '../@types/cards'
import { Card } from '../components/Card'
import useCardUtils from '../hooks/useCardUtils'

export const Board = () => {
  const { solveCardState, flipBackAllState, getFlippedState } = useCardUtils()
  const { cards } = useContext(AppContext) as BoardContextType

  useEffect(() => {
    const flipped: ICard[] = getFlippedState()
    if (flipped.length < 2) return

    const flippedValuesMatch = flipped[0].value === flipped[1].value
    if (flippedValuesMatch) flipped.forEach(card => solveCardState(card.position))

    flipBackAllState()
  }, [cards, flipBackAllState, getFlippedState, solveCardState])

  return (
    <div className='cards grid grid-cols-2 gap-3 p-4'>
      {cards.map((card: ICard, index: number) => <Card key={`card-${index}`} {...card} cardPosition={index} />)}
    </div>
  )
}
