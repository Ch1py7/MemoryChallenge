import { Dispatch, FC, ReactElement, SetStateAction } from 'react'

interface Props {
  setMusic: Dispatch<SetStateAction<boolean>>
}

export const SoundOff: FC<Props> = ({setMusic}): ReactElement => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' onClick={() => setMusic(prev => !prev)} className='h-10 cursor-pointer'>
      <path d='M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z' />
    </svg>
  )
}