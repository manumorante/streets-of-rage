import React from 'react'
import { render } from 'react-dom'
import { Home } from './components/Home'
import './index.scss'

const App = () => {
  return <Home />
}

const DOMelement = document.querySelector('#app')
render(<App />, DOMelement)
export { App }
