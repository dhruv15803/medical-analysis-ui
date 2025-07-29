import { CiMoneyBill } from "react-icons/ci";

type Props = {
  patientBillTotal: number;
};

const PatientBillCard = ({ patientBillTotal }: Props) => {
  return (
    <>
      <div className="flex flex-col border-2 rounded-lg min-w-[25%] p-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Patient Bill Due</span>
          <CiMoneyBill />
        </div>

        <div className="flex items-center justify-center">
          <span className="text-4xl font-bold">${patientBillTotal}</span>
        </div>
      </div>
    </>
  );
};

export default PatientBillCard;
