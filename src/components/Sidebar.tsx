import {
  BookIcon,
  BrickWallIcon,
  CuboidIcon,
  DiamondIcon,
  FileIcon,
  FileStackIcon,
  LayoutDashboard,
  LinkIcon,
  ScanBarcode,
  Triangle,
} from "lucide-react";
import { RiArrowRightSLine } from "react-icons/ri";

type SidebarLink = {
  icon: any;
  text: string;
};

const SIDEBAR_COMPONENTS_LINK: SidebarLink[] = [
  {
    icon: <CuboidIcon />,
    text: "Base",
  },
  {
    icon: <FileIcon />,
    text: "Custom",
  },
  {
    icon: <BrickWallIcon />,
    text: "Extended",
  },
  {
    icon: <LinkIcon />,
    text: "Links",
  },
];

const SIDEBAR_CUSTOM_LINKS: SidebarLink[] = [
  {
    icon: <LayoutDashboard />,
    text: "Dashboard",
  },
  {
    icon: <ScanBarcode />,
    text: "Appointments",
  },
  {
    icon: <DiamondIcon />,
    text: "Patients",
  },
  {
    icon: <FileStackIcon />,
    text: "Reports",
  },
  {
    icon: <BookIcon />,
    text: "Library",
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col w-[20%] h-screen p-4 border-r-2 bg-purple-50">
        <header className="flex items-center justify-center gap-2">
          <Triangle className="text-purple-800 " />
          <h1 className="text-xl font-semibold text-purple-800">Dr. Bliss</h1>
        </header>

        <div className="flex flex-col justify-between h-full mt-24 mb-6">
          <div className="flex flex-col gap-4">
            <div className="font-light text-xl">CUSTOM</div>

            <div className="flex flex-col gap-2">
              {SIDEBAR_CUSTOM_LINKS.map((sidebarLink, idx) => {
                return (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {sidebarLink.icon}
                      <span>{sidebarLink.text}</span>
                    </div>
                    <RiArrowRightSLine />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-light text-xl">COMPONENTS</div>

            <div className="flex flex-col gap-2">
              {SIDEBAR_COMPONENTS_LINK.map((sidebarLink, idx) => {
                return (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {sidebarLink.icon}
                      <span>{sidebarLink.text}</span>
                    </div>
                    <RiArrowRightSLine />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
