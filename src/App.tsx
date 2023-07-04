import { Main } from 'components/Main'
import { Table } from 'components/Table'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'

export const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/game' element={<Table />} />
    </Routes>
  )
}

