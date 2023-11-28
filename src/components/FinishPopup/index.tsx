import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { BoardContextType } from "../../@types/cards";

export const FinishPopup = () => {
  const { timer, setFinished } = useContext(AppContext) as BoardContextType;

  return (
    <>
      <div className="absolute w-full h-full backdrop-blur-md top-0" />
      <div className="p-2 rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black">
        <div className="p-10 border-2 border-white rounded">
          <button className="absolute right-0 top-0 pr-6 pt-4 text-2xl" onClick={() => setFinished(false)}>&times;</button>
          Congrats! You have completed the game in {timer.time} seconds.
        </div>
      </div>
    </>
  );
};
