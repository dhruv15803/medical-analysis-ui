import { HeartIcon } from "lucide-react";
import { Chart, CategoryScale, LinearScale } from "chart.js";
import { Line } from "react-chartjs-2";

type Props = {
  systolicPressure: number;
  diastolicPressure: number;
};

Chart.register(CategoryScale, LinearScale);

const heartRateBpmData: { x: number; y: number }[] = [
  {
    x: 0,
    y: 150,
  },
  {
    x: 10,
    y: 130,
  },
  {
    x: 40,
    y: 130,
  },
  {
    x: 50,
    y: 150,
  },
];

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

        <div className="w-full h-full">
          <Line
            data={{
              datasets: [
                {
                  data: heartRateBpmData,
                  borderColor: "white",
                  borderWidth: 2,
                  fill: false,
                  pointBackgroundColor: "white",
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  type: "linear",
                  title: {
                    display: true,
                    text: "Time (s)",
                    color: "white",
                  },
                  ticks: {
                    color: "white",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Bpm",
                    color: "white",
                  },
                  ticks: {
                    color: "white", // 👈 Y-axis labels color
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

export default HeartRateCard;
