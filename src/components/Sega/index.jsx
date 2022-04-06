import React, { useState, useEffect } from 'react'
import sega from '/img/sega.png'
import './styles.css'

export default function Sega({ opt }) {
  const { state, dispatch } = opt
  const [statusClass, setStatusClass] = useState('fade-in')

  function handleClick() {
    dispatch({ type: 'PLAY' })
  }

  useEffect(() => {
    if (state.play) {
      setStatusClass('fade-out')
    }
  }, [state.play])

  return (
    <div className={`Sega inset-0 center ${statusClass}`} onClick={handleClick}>
      <img className='Sega__img' src={sega} alt='Sega' />
    </div>
  )
}
