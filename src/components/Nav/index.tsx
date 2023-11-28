import { Link } from "react-router-dom";
import useCardUtils from "../../hooks/useCardUtils";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { BoardContextType } from "../../@types/cards";

export const Nav = () => {
  const { cards, timer } = useContext(AppContext) as BoardContextType;
  const { getSolvedState } = useCardUtils();
  const solved = getSolvedState();

  return (
    <nav className="flex justify-between mt-6 mb-2 px-4 md:px-10 lg:px-14">
      <div className="flex uppercase">
        <div className="flex items-end mr-10">
          <span className="mr-2">Solved</span>
          <span className="text-xl">
            {solved.length}/{cards.length}
          </span>
        </div>
        <div className="flex items-end mr-10">
          <span className="mr-2">Time</span>
          <span className="text-xl">{timer.time}</span>
        </div>
      </div>
      <div>
        <Link className="btn py-2 px-4" to="/">
          Menu
        </Link>
      </div>
    </nav>
  );
};
