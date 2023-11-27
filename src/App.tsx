import "./App.css";
import AppProvider from "./context/appContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { GamePage } from "./pages/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);

function App() {
  return (
    <AppProvider>
      <main className="app">
        <RouterProvider router={router} />
      </main>
    </AppProvider>
  );
}

export default App;
