import React, { useState, useEffect } from 'react'
import './styles.css'

export default function Manifest({ opt }) {
  const { state, dispatch } = opt
  const [statusClass, setStatusClass] = useState('')

  useEffect(() => {
    if (state.play) {
      setStatusClass('scroll-up')
    }
  }, [state.play])

  return (
    <div className='Manifest inset-0'>
      <div className={`Manifest__text ${statusClass}`}>
        <p>
          This city was once a happy. Peaceful place... Until one day. A
          powerful secret criminal organization took over. This vicious
          syndicate soon had control of the government and even the police
          force. The city has become a center of violence and crime where no one
          is safe.
        </p>
        <p>
          Amid this turmoil. A group of determined young police officers has
          sworn to clean up the city. Amoung them are Adan Hunter, Alex Stone
          and Blaze Fielding. They are willing to risk anything... Even their
          lives... On the...
        </p>
        <h2 className='Manifest__title'>Streets of Rage</h2>
      </div>
    </div>
  )
}
