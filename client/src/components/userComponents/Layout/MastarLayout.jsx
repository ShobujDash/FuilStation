// import Map from "../Map";
// import ASidebar from "./ASidebar";

// const MasterLayout = ({ children }) => {
//   return (
//     <>
//       <div className="flex h-screen w-screen bg-gray-100">
//         <div className="hidden w-5/12 md:flex">
//           <div className="">
//             <ASidebar />
//           </div>
//           <div className="bg-cyan-50 w-full p-2 hidden md:block">
//             {children}
//           </div>
//         </div>

//         {/* Main Content */}
//         <main className="flex-1 p-2 h-screen mx-1">
//           <div className="w-full h-full">
//             {/* Map */}
//             <Map />
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default MasterLayout;

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
      <div className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-6">
        <div className="h-52 bg-red-500">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
