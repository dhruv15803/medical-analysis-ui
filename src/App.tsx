import { PATIENT_NAME } from "./appConsts";
import Patient from "./components/Patient";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="flex flex-col w-[100%] h-full overflow-y-auto">
          <Topbar />
          <Patient patientName={PATIENT_NAME} />
        </div>
      </div>
    </>
  );
}

export default App;
