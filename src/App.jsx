import React, { useState } from 'react'
import Sega from './components/Sega'
import Statement from './components/Statement'
import City from './components/City'
import Audio from './components/Audio'

function nextFrame() {
  console.log('nextFrame')
}

export default function App() {
  const [frame, setFrame] = useState([])

  return (
    <main className='App'>
      <Sega />
      <Statement />
      <City />
      <Audio />
    </main>
  )
}
