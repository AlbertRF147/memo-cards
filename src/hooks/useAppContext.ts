import { useContext } from "react"
import { AppContext } from "../context/appContext"

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("Wrap the component with the <AppProvider /> to be able to use AppContext")
  }
  return { cards: context.cards, setCards: context.setCards }
}
