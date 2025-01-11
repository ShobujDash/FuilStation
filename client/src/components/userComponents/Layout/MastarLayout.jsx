
import BottomNavbar from "@/components/Auth/BottomNavBar";
import Map from "../Map";
import ASidebar from "./ASidebar";








const MasterLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-1 w-full">
      {/* First Section */}
      <div className="hidden sm:block sm:col-span-4 md:col-span-4 lg:col-span-2">
        <div className="h-52 bg-blue-500">
          <ASidebar />
        </div>
      </div>

      {/* Second Section */}
      <div className="hidden lg:block lg:col-span-4">
        <div className="">{children}</div>
      </div>

      {/* Third Section */}
      <div className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-6 h-screen">
        <Map />

        <BottomNavbar />
      </div>

    
    </div>
  );
};

export default MasterLayout;
