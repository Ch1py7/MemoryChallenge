import { SoundOff, SoundOn } from 'assets'
import { Dispatch, FC, ReactElement, SetStateAction } from 'react'

interface Props {
  music: boolean
  setMusic: Dispatch<SetStateAction<boolean>>
}

export const IsPause: FC<Props> = ({ music, setMusic }): ReactElement => {
  return <>{music ? <SoundOn setMusic={setMusic} /> : <SoundOff setMusic={setMusic} />}</>
}
