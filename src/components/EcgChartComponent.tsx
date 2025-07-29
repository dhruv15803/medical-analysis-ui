import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale } from "chart.js/auto";

type Props = {
  averageBpm: number;
};

const ecgData = Array.from({ length: 500 }, (_, i) => ({
  x: i * 0.01,
  y: Math.sin(i * 0.2) + (Math.random() - 0.5) * 0.1,
}));

Chart.register(CategoryScale, LinearScale);

const EcgChartComponent = ({ averageBpm }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 border-2 rounded-lg p-4">
        <div className="flex items-center justify-between p-2">
          <h1 className="font-semibold text-xl">Heart ECG</h1>

          <div className="flex items-center gap-2 border-2 rounded-lg p-4 bg-gray-200">
            <span className="text-purple-400 font-semibold text-xl">
              {averageBpm}
            </span>
            <span className="text-gray-500">Average</span>
          </div>
        </div>

        <Line
          datasetIdKey="id"
          data={{
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
              {
                label: "ECG signal",
                data: ecgData,
                borderColor: "purple",
                borderWidth: 2,
                fill: false,
                tension: 0,
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
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Amplitude (mV)",
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default EcgChartComponent;
