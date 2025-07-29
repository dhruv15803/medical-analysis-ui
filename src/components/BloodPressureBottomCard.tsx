import { DropletIcon } from "lucide-react";

type Props = {
  upperBloodPressure: number;
  lowerBloodPressure: number;
};

const BloodPressureBottomCard = ({
  lowerBloodPressure,
  upperBloodPressure,
}: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 border-2 rounded-lg p-4">
        <div className="flex items-center justify-start">
          <div>
            {" "}
            <DropletIcon className="text-purple-500" size={16} />
          </div>
          <div>
            <DropletIcon className="text-purple-500" size={24} />
          </div>

          <div>
            <DropletIcon className="text-purple-500" size={16} />
          </div>
        </div>

        <div className="text-purple-800 font-semibold text-xl">
          Blood Pressure
        </div>

        <div className="text-purple-500">
          <span className="font-semibold text-xl">{upperBloodPressure}/</span>
          <span className="font-semibold text-xl">{lowerBloodPressure}</span>
        </div>
      </div>
    </>
  );
};

export default BloodPressureBottomCard;
