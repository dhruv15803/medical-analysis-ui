import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

const Topbar = () => {
  return (
    <>
      <header className="flex sticky top-0 z-10 bg-white items-center justify-between p-4 border-b-2">
        <h1 className="text-xl font-bold">Patient Details</h1>

        <div className="flex items-center gap-2">
          <Input type="text" placeholder="Search Patient" />
          <Button className="bg-purple-400 rounded-lg w-fit">
            <SearchIcon className="text-white" />
          </Button>
        </div>
      </header>
    </>
  );
};

export default Topbar;
