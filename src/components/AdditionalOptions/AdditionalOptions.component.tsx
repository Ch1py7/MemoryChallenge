import { Icon } from '@iconify/react'
import { IsPause } from 'components/isPause'
import { FC, ReactElement, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { startCountdown } from 'utils/countdown.utils'

export const AdditionalOptions: FC = (): ReactElement => {
  const [countdown, setCountdown] = useState<number>(30)
  const [music, setMusic] = useState<boolean>(true)
  const [ticking, setTicking] = useState<boolean>(false)

  useEffect(() => {
    startCountdown(new Date().getTime(), setCountdown)
  }, [])

  useEffect(() => {
    if (countdown <= 10) {
      setTicking(true)
      setMusic(false)
    }
  }, [countdown])

  if (countdown <= 0) {
    alert("oops you didn't find them all")
    location.href = '/'
  }
  return (
    <div className='flex justify-between items-center py-6 px-[27rem]'>
      <NavLink to='/' className='flex bg-blue-300 w-8 h-8 justify-center items-center rounded-lg'>
        <Icon icon='bxs:left-arrow' color='orange' width={24} height={24} />
      </NavLink>
      <p className='text-xl text-slate-100'>{countdown}</p>
      <IsPause music={music} setMusic={setMusic} />
      {music ? (
        <audio autoPlay loop>
          <source src='/background.mp3' type='audio/mp3' />
        </audio>
      ) : null}
      {ticking ? (
        <audio autoPlay loop>
          <source src='/ticking.mp3' type='audio/mp3' />
        </audio>
      ) : null}
    </div>
  )
}
