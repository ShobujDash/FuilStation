import React from "react";

const ActiveOrders = () => {
  const orders = [
    "Food",
    "Groupage Cargo",
    "Construction Materials",
    "Flowers",
    "Flowers",
    "Flowers",
  ];

  return (
    <div className="h-full w-[60%] md:w-[70%] hidden sm:block">
      <div className="bg-[#F6F6F6] shadow-md rounded-lg p-4 w-full h-screen overflow-hidden">
        <h2 className="text-lg font-bold mb-4">Active Orders</h2>
        <div className="space-y-4 overflow-y-scroll h-full no-scrollbar">
          {orders.map((item, index) => (
            <div key={index} className="p-4 rounded-lg shadow-sm bg-white">
              <p className="text-sm text-gray-600">ID {816495 + index}</p>
              <p className="text-base font-medium">{item}</p>
              <p className="text-sm text-gray-500">25 Apr</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveOrders;
