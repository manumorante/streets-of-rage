import React, { useState } from 'react'
import City from './components/City'
import Audio from './components/Audio'
import Sega from './components/Sega'

function nextFrame() {
  console.log('nextFrame')
}

export default function App() {
  const [frame, setFrame] = useState([])

  return (
    <main className='App'>
      <Sega />
      <City />
      <Audio />
    </main>
  )
}
