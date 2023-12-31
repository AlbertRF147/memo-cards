import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/appContext";
import { BoardContextType, ICard } from "../../@types/cards";
import { Card } from "../../components/Card";
import useCardUtils from "../../hooks/useCardUtils";
import { FinishPopup } from "../FinishPopup";

export const Board = () => {
  const [solving, setSolving] = useState(false);
  const { solveCardState, flipBackAllState, getFlippedState, getSolvedState } =
    useCardUtils();
  const { cards, timer, finished, setFinished } = useContext(AppContext) as BoardContextType;

  // Start timer
  useEffect(() => {
    const solved = getSolvedState();
    if (!solved.length) timer.reset();
    timer.start();
  }, []);

  // Finish logic
  useEffect(() => {
    const solved = getSolvedState();
    const allAreSolved = solved.length === cards.length;
    if (allAreSolved) {
      timer.pause();
      setFinished(true)
    }
  }, [cards]);

  // Flipping logic
  useEffect(() => {
    const flipped: ICard[] = getFlippedState();
    if (flipped.length < 2) return;

    setSolving(true);
    const flippedValuesMatch = flipped[0].value === flipped[1].value;
    if (flippedValuesMatch)
      flipped.forEach((card) => solveCardState(card.position));

    window.setTimeout(() => {
      flipBackAllState();
      setSolving(false);
    }, 1000);
  }, [cards, flipBackAllState, getFlippedState, solveCardState]);

  return (
    <>
    <div className="cards grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4 md:p-10 lg:p-14">
      {cards.map((card: ICard, index: number) => (
        <Card
          key={`card-${index}`}
          {...card}
          cardPosition={index}
          solving={solving}
        />
      ))}
    </div>
    {finished && <FinishPopup />}
    </>
  );
};
