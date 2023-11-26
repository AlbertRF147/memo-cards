import useCardUtils from '../hooks/useCardUtils'

export type CardProps = {
  value: number
  flipped: boolean
  solved: boolean
  cardPosition: number
}

export const Card = ({ value, flipped, solved, cardPosition }: CardProps) => {

  const { flipCardState } = useCardUtils()

  const handleOnCardClick = (cardPosition: number) => {
    flipCardState(cardPosition)
  }

  return (
    <div className='card border p-3 text-center rounded cursor-pointer' onClick={() => handleOnCardClick(cardPosition)}>
      {flipped || solved
        ? value
        : '???'
      }
    </div>
  )
}
