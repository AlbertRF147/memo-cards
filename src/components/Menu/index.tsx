import { Link, useNavigate } from "react-router-dom";
import useCardUtils from "../../hooks/useCardUtils";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { BoardContextType } from "../../@types/cards";

export const Menu = () => {
  const navigate = useNavigate()
  const { numCardsToPlay, setNumCardsToPlay, restart } = useContext(
    AppContext,
  ) as BoardContextType;
  const { getSolvedState } = useCardUtils();
  const solved = getSolvedState();

  const redirectToGame = () => {
    navigate("/game")
  }

  return (
    <div className="p-4 md:p-10 lg:mx-48 border-4 border-white rounded flex flex-col">
      <h2 className="text-4xl text-center mb-4">-- MENU --</h2>
      <Link className="btn my-2" to="/game">
        {solved.length ? "Continue" : "Start"}
      </Link>
      {!!solved.length && (
        <button className="btn my-2" onClick={() => restart(redirectToGame)}>
          Restart
        </button>
      )}
      <div className="flex justify-around">
        <button
          className={`btn m-2 ml-0 flex-1 ${
            numCardsToPlay === 6 ? "active" : ""
          }`}
          onClick={() => setNumCardsToPlay(6)}
        >
          <small>x</small>6 Cards
        </button>
        <button
          className={`btn m-2 flex-1 ${numCardsToPlay === 12 ? "active" : ""}`}
          onClick={() => setNumCardsToPlay(12)}
        >
          <small>x</small>12 Cards
        </button>
        <button
          className={`btn m-2 mr-0 flex-1 ${
            numCardsToPlay === 24 ? "active" : ""
          }`}
          onClick={() => setNumCardsToPlay(24)}
        >
          <small>x</small>24 Cards
        </button>
      </div>
    </div>
  );
};
