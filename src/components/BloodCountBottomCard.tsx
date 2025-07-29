import { GiBlood } from "react-icons/gi";

type Props = {
  bloodCountInMl: number;
};

const BloodCountBottomCard = ({ bloodCountInMl }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 border-2 rounded-lg p-4">
        <div className="flex items-center justify-start">
          <GiBlood className="text-purple-500" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-purple-800 font-semibold text-xl">
            Blood Count
          </span>
          <span className="text-purple-500 font-semibold">
            {bloodCountInMl}/ml
          </span>
        </div>
      </div>
    </>
  );
};

export default BloodCountBottomCard;
