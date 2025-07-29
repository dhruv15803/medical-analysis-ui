import { HeartIcon } from "lucide-react";
import React from "react";

type Props = {
  feverFahrenheit: number;
};

const FeverCard = ({ feverFahrenheit }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 h-full border-2 rounded-lg min-w-[25%] p-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Fever</span>
          <HeartIcon />
        </div>

        <div className="flex items-center justify-start gap-2">
          <span className="text-3xl">{feverFahrenheit}</span>
          <span className="text-md">°F</span>
        </div>

        <div>graph area</div>
      </div>
    </>
  );
};

export default FeverCard;
