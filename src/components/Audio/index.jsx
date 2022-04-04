import React from 'react'
import { useAudio } from '../../useAudio'
import './styles.css'

export default function Audio() {
  const [playing, toggle] = useAudio('/src/audio/streets-of-rage.mp3')
  return (
    <div className='Audio' onClick={toggle}>
      {playing ? (
        <svg
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'
          />
        </svg>
      ) : (
        <svg
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'
            clipRule='evenodd'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2'
          />
        </svg>
      )}
    </div>
  )
}
