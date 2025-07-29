type Props = {
  latestFeverValue: number;
};

const FeverHistoryCard = ({ latestFeverValue }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 border-2 rounded-lg p-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Fever History</h1>
          <span className="text-gray-400">1-7 December 2020</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-8xl">{latestFeverValue}</div>

          <span>yesterday</span>
        </div>
      </div>
    </>
  );
};

export default FeverHistoryCard;
