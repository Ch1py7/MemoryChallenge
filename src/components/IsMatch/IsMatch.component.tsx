import { Dispatch, FC, ReactElement, SetStateAction } from 'react'

interface Props {
  setMatch: Dispatch<SetStateAction<boolean>>
  text: string
}

export const IsMatch: FC<Props> = ({ setMatch, text }): ReactElement => {
  return (
    <div className='flex items-center justify-center flex-col w-full h-full py-4'>
      <div className='bg-zinc-300 flex justify-center items-center flex-col p-10 gap-4'>
        <p>{text}</p>
        <button className='h-10 bg-slate-500 w-24 rounded-lg' onClick={() => setMatch(false)}>
          close
        </button>
      </div>
    </div>
  )
}
