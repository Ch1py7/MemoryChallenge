import { Logo } from 'assets'
import { FC, ReactElement } from 'react'

export const Main: FC = (): ReactElement => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-10'>
      <img src={Logo} className='w-[40rem] animate-slideIn h-64' />
      <a
        href='/game'
        className='text-gray-900 text-7xl bg-stone-50 px-10 py-4 rounded-lg animate-slideUp hover:transformY hover:-translate-y-1'
      >
        Start!
      </a>
      <audio autoPlay loop>
        <source src='/background.mp3' type='audio/mp3' />
      </audio>
    </div>
  )
}
