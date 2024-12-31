import MasterLayout from "@/components/userComponents/Layout/MastarLayout";

const BatteryPage = () => {
  return (
    <MasterLayout>
      {" "}
      <div className="bg-cyan-50 h-full">
        <h1 className=" text-center py-5 text-md lg:text-xl font-bold ">
          Calculate Your <span className="text-[#DE2B5F]">Battery Percentage</span>
        </h1>

      
      </div>
    </MasterLayout>
  );
};

export default BatteryPage;
