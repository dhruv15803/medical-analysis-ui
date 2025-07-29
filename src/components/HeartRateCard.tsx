import { HeartIcon } from "lucide-react";

type Props = {
  systolicPressure: number;
  diastolicPressure: number;
};

const HeartRateCard = ({ diastolicPressure, systolicPressure }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 border-2 h-full rounded-lg bg-purple-500 text-white min-w-[25%] p-6">
        <div className="flex items-center justify-between w-full">
          <span>Heartrate</span>
          <HeartIcon />
        </div>

        <div className="flex items-center justify-center">
          <span className="font-semibold text-white text-3xl">
            {systolicPressure}/{diastolicPressure}
          </span>
        </div>

        <div>graph area</div>
      </div>
    </>
  );
};

export default HeartRateCard;
