import { Link } from "react-router-dom"

export const Nav = () => {
  return (
    <nav className="flex justify-end m-6 mb-2">
      <Link className="btn py-2 px-4" to="/">Menu</Link>
    </nav>
  )
}
