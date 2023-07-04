import { Comet, Moon, Star, Sun } from 'assets'
import { AdditionalOptions } from 'components/AdditionalOptions'
import { Card } from 'components/Card'
import { IsMatch } from 'components/IsMatch'
import { FC, ReactElement, useEffect, useState } from 'react'

const iconCards = [Moon, Sun, Star, Comet]
  .flatMap((icon) => [`a|${icon}`, `b|${icon}`])
  .sort(() => Math.random() - 0.5)

export const Table: FC = (): ReactElement => {
  const [guessed, setGuessed] = useState<string[]>([])
  const [selected, setSelected] = useState<string[]>([])
  const [isMatch, setIsMatch] = useState<boolean>(false)
  const [isNotMatch, setIsNotMatch] = useState<boolean>(false)
  const [correct, setCorrect] = useState<boolean>(false)
  const [wrong, setWrong] = useState<boolean>(false)

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split('|')[1] === selected[1].split('|')[1]) {
        setGuessed((guessed) => guessed.concat(selected))
        setIsMatch(true)
        setCorrect(true)
        setTimeout(() => setCorrect(false), 500)
      } else if (selected[0].split('|')[1] !== selected[1].split('|')[1]) {
        setWrong(true)
        setTimeout(() => {
          setIsNotMatch(true), setWrong(false)
        }, 500)
      }
      setTimeout(() => {
        setSelected([])
      }, 500)
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === iconCards.length) {
      alert('You did it')
      location.href = '/'
    }
  }, [guessed])

  return (
    <>
      {isMatch ? <IsMatch setMatch={setIsMatch} text="nice! it's a match" /> : null}
      {isNotMatch ? (
        <IsMatch setMatch={setIsNotMatch} text='sorry, but this is not a match' />
      ) : null}
      <AdditionalOptions />
      <ul className='grid grid-cols-[repeat(4,minmax(14rem,14rem))] gap-10 place-content-center mt-10'>
        {iconCards.map((card) => {
          const [_, url] = card.split('|')
          return (
            <Card
              key={card}
              card={card}
              guessed={guessed}
              selected={selected}
              setSelected={setSelected}
            >
              <img src={url} alt='icon' className='h-40 w-40' />
            </Card>
          )
        })}
      </ul>
      {correct ? (
        <audio autoPlay loop>
          <source src='/correct.mp3' type='audio/mp3' />
        </audio>
      ) : null}
      {wrong ? (
        <audio autoPlay loop>
          <source src='/incorrect.mp3' type='audio/mp3' />
        </audio>
      ) : null}
    </>
  )
}
