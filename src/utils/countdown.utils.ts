import { Dispatch, SetStateAction } from 'react'

export const startCountdown = (
  initialTimestamp: number | null,
  setCountdown: Dispatch<SetStateAction<number>>
) => {
  const interval = setInterval(() => {
    const currentTime: number = new Date().getTime()
    const timeDifference: number = currentTime - initialTimestamp!
    const counterTime = 30 - Math.floor(timeDifference / 1000)
    setCountdown(counterTime)
    if (counterTime <= 0) {
      clearInterval(interval)
      return
    }
  }, 1000)
}
