import './App.css'
import AppProvider from './context/appContext'
import { Board } from './components/Board'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is the game popup</div>,
  },
  {
    path: "/game",
    element: <Board />
  }
])

function App() {

  return (
    <AppProvider>
      <main className='app'>
        <RouterProvider router={router} />
      </main>
    </AppProvider>
  )
}

export default App
