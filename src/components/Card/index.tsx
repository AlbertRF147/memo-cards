import useCardUtils from "../../hooks/useCardUtils";
import "./style.css";

export type CardProps = {
  value: number;
  flipped: boolean;
  solved: boolean;
  cardPosition: number;
  solving: boolean;
};

export const Card = ({
  value,
  flipped,
  solved,
  cardPosition,
  solving,
}: CardProps) => {
  const { flipCardState } = useCardUtils();

  const handleOnCardClick = (cardPosition: number) => {
    if (solving) return;
    flipCardState(cardPosition);
  };

  return (
    <div
      className={'card relative border p-1 text-center rounded cursor-pointer bg-white text-black font-bold aspect-[1/1.1]'}
      onClick={() => handleOnCardClick(cardPosition)}
    >
      {flipped && <div className="w-full h-full border-2 rounded border-[#444cf7]"></div>}
      {solved && <div className="w-full h-full border-2 rounded border-green-500"></div>}
      {flipped || solved ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
          {value}
        </div>
      ) : (
        <div className="rounded w-full h-full card-background" />
      )}
    </div>
  );
};
