import './App.css'
import AppProvider from './context/appContext'
import { Board } from './containers/Board'

function App() {

  return (
    <AppProvider>
      <main className='app'>
        <Board />
      </main>
    </AppProvider>
  )
}

export default App
