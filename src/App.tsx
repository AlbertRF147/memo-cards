import { useState } from 'react'
import './App.css'
import AppProvider from './context/appContext'
import { Cards } from './containers/Cards'

function App() {

  return (
    <AppProvider>
      <main className='app'>
        <Cards />
      </main>
    </AppProvider>
  )
}

export default App
