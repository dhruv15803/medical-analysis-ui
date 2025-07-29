import { HeartIcon } from "lucide-react";

type Props = {
  bpm: number;
};

const HeartRateBottomCard = ({ bpm }: Props) => {
  return (
    <div className="flex flex-col border-2 rounded-lg gap-4 p-4">
      <div className="flex items-center justify-start">
        <HeartIcon className="text-purple-500" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-purple-800 text-xl font-semibold">
          Heart Rate
        </span>
        <span className="text-2xl text-purple-500 font-semibold">
          {bpm} bpm
        </span>
      </div>
    </div>
  );
};

export default HeartRateBottomCard;
