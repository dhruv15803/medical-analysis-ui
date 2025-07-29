import {
  AVERAGE_BPM,
  BLOOD_COUNT_IN_ML,
  FEVER_FAHRENHEIT,
  GLUCOSE_LEVEL_LOWER,
  GLUCOSE_LEVEL_UPPER,
  HEARTRATE_BOTTOM_CARD,
  HEARTRATE_DiASTOLICPRESSURE,
  HEARTRATE_SYSTOLIC_PRESSURE,
  LATEST_FEVER_VALUE,
  LOWER_BLOOD_PRESSURE,
  LOWER_BLOOD_PRESSURE_BOTTOM,
  PATIENT_DUE_BILL,
  UPPER_BLOOD_PRESSURE,
  UPPER_BLOOD_PRESSURE_BOTTOM,
} from "@/appConsts";
import BloodCountBottomCard from "./BloodCountBottomCard";
import BloodPressureBottomCard from "./BloodPressureBottomCard";
import BloodPressureCard from "./BloodPressureCard";
import EcgChartComponent from "./EcgChartComponent";
import FeverCard from "./FeverCard";
import FeverHistoryCard from "./FeverHistoryCard";
import GlucoseLevelBottomCard from "./GlucoseLevelBottomCard";
import HeartRateBottomCard from "./HeartRateBottomCard";
import HeartRateCard from "./HeartRateCard";
import PatientBillCard from "./PatientBillCard";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

type Props = {
  patientName: string;
};

const Patient = ({ patientName }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-between gap-8 w-full h-screen p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{patientName}</h1>
          <Button className="bg-purple-400 text-white">
            <PlusIcon />
            <span>Add Record</span>
          </Button>
        </div>

        <div className="flex items-center justify-between min-h-[30%]">
          <HeartRateCard
            systolicPressure={HEARTRATE_SYSTOLIC_PRESSURE}
            diastolicPressure={HEARTRATE_DiASTOLICPRESSURE}
          />
          <FeverCard feverFahrenheit={FEVER_FAHRENHEIT} />
          <div className="flex flex-col gap-4">
            <BloodPressureCard
              lower={LOWER_BLOOD_PRESSURE}
              upper={UPPER_BLOOD_PRESSURE}
            />
            <PatientBillCard patientBillTotal={PATIENT_DUE_BILL} />
          </div>
          <FeverHistoryCard latestFeverValue={LATEST_FEVER_VALUE} />
        </div>

        <div className="h-full">
          <EcgChartComponent averageBpm={AVERAGE_BPM} />
        </div>

        <div className="grid grid-cols-4 gap-2 p-4">
          <BloodPressureBottomCard
            upperBloodPressure={UPPER_BLOOD_PRESSURE_BOTTOM}
            lowerBloodPressure={LOWER_BLOOD_PRESSURE_BOTTOM}
          />
          <HeartRateBottomCard bpm={HEARTRATE_BOTTOM_CARD} />
          <GlucoseLevelBottomCard
            lowerGlucoseLevel={GLUCOSE_LEVEL_LOWER}
            upperGlucoseLevel={GLUCOSE_LEVEL_UPPER}
          />
          <BloodCountBottomCard bloodCountInMl={BLOOD_COUNT_IN_ML} />
        </div>
      </div>
    </>
  );
};

export default Patient;
