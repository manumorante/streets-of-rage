import React, { useReducer } from 'react'
import Sega from './components/Sega'
import Statement from './components/Statement'
import City from './components/City'
import Audio from './components/Audio'

function reducer(state, action) {
  switch (action.type) {
    case 'PLAY':
      console.log('play')
      return { ...state, play: true }
    default:
      throw new Error()
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { playing: false })

  return (
    <main className='App'>
      <Sega opt={{ state, dispatch }} />
      {/* <Statement /> */}
      <City />
      <Audio opt={{ state, dispatch }} />
    </main>
  )
}
