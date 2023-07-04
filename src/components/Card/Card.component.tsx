import { Icon } from '@iconify/react'
import { Dispatch, FC, ReactElement, SetStateAction } from 'react'

interface CardProps {
  card: string
  selected: string[]
  guessed: string[]
  setSelected: Dispatch<SetStateAction<string[]>>
  children: ReactElement | ReactElement[]
}

export const Card: FC<CardProps> = ({
  card,
  selected,
  setSelected,
  guessed,
  children,
}): ReactElement => {
  return (
    <li
      key={card}
      className='bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer'
      onClick={() => selected.length < 2 && setSelected((selected) => selected.concat(card))}
    >
      {selected.includes(card) || guessed.includes(card) ? (
        <>{children}</>
      ) : (
        <Icon icon='ic:round-question-mark' color='yellow' height={200} width={200} />
      )}
    </li>
  )
}
