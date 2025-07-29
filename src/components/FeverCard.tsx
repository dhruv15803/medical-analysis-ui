import { HeartIcon } from "lucide-react";
import { Chart, CategoryScale, LinearScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale);
type Props = {
  feverFahrenheit: number;
};

const feverCardData: { x: number; y: number }[] = [
  {
    x: 10,
    y: 110,
  },
  {
    x: 30,
    y: 150,
  },
  {
    x: 60,
    y: 150,
  },
  {
    x: 80,
    y: 138,
  },
];

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

        <div className="w-full h-full">
          <Line
            data={{
              datasets: [
                {
                  data: feverCardData,
                  borderColor: "purple",
                  borderWidth: 2,
                  fill: false,
                  pointBackgroundColor: "purple",
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  type: "linear",
                  title: {
                    display: true,
                    color: "purple",
                  },
                  ticks: {
                    color: "purple",
                  },
                },
                y: {
                  title: {
                    display: true,
                    color: "purple",
                  },
                  ticks: {
                    color: "purple", // 👈 Y-axis labels color
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FeverCard;
