import React, { useReducer } from 'react'
import { reducer, initialState } from './js/reducer'
import Sega from './components/Sega'
import City from './components/City'
import Manifest from './components/Manifest'
import Music from './components/Music'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <main className='App'>
      <Sega opt={{ state, dispatch }} />
      <Manifest opt={{ state, dispatch }} />
      <City />
      <Music opt={{ state, dispatch }} />
    </main>
  )
}
