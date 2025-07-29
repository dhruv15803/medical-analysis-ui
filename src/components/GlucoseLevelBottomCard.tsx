import { GiSugarCane } from "react-icons/gi";

type Props = {
  lowerGlucoseLevel: number;
  upperGlucoseLevel: number;
};

const GlucoseLevelBottomCard = ({
  lowerGlucoseLevel,
  upperGlucoseLevel,
}: Props) => {
  return (
    <>
      <div className="flex flex-col border-2 rounded-lg p-4 gap-4 ">
        <div className="flex items-center justify-start">
          <GiSugarCane className="text-purple-500" />
        </div>

        <div className="flex flex-col gap-2 justify-center items-start">
          <span className="text-purple-800 font-semibold text-xl">
            Glucose Level
          </span>
          <span className="text-purple-500 font-semibold text-2xl">
            {lowerGlucoseLevel}-{upperGlucoseLevel}
          </span>
        </div>
      </div>
    </>
  );
};

export default GlucoseLevelBottomCard;
