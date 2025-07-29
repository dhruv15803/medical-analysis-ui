import React from "react";
import { TbHeartRateMonitor } from "react-icons/tb";

type Props = {
  upper: number;
  lower: number;
};

const BloodPressureCard = ({ lower, upper }: Props) => {
  return (
    <>
      <div className="flex flex-col border-2 rounded-lg p-6 min-w-[25%]">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Blood Pressure</span>
          <TbHeartRateMonitor />
        </div>

        <div className="flex flex-col w-full items-center">
          <div className="flex items-center w-full justify-between">
            <span className="font-semibold">{upper}</span>
            <span>Upper</span>
          </div>
          <div className="flex items-center w-full justify-between">
            <span className="font-semibold">{lower}</span>
            <span>Lower</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodPressureCard;
