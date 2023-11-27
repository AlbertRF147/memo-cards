import { Link } from "react-router-dom";
import useCardUtils from "../../hooks/useCardUtils";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

export const Menu = () => {
  const { numCardsToPlay, setNumCardsToPlay } = useContext(AppContext);
  const { getSolvedState } = useCardUtils();
  const solved = getSolvedState();

  return (
    <div className="p-4 border border-white rounded flex flex-col">
      <h2 className="text-4xl text-center mb-4">-- MENU --</h2>
      <Link className="btn my-2" to="/game">
        {solved.length ? "Continue" : "Start"}
      </Link>
      {!!solved.length && <button className="btn my-2">Restart</button>}
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
