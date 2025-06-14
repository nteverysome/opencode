import React from "react";
import { FaHome, FaRobot, FaPlug, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-20 bg-gray-800 text-white flex flex-col items-center py-4">
      <button type="button" className="mb-4 hover:bg-gray-700 p-2 rounded">
        <FaHome />
      </button>
      <button type="button" className="mb-4 hover:bg-gray-700 p-2 rounded">
        <FaRobot />
      </button>
      <button type="button" className="mb-4 hover:bg-gray-700 p-2 rounded">
        <FaPlug />
      </button>
      <button type="button" className="mb-4 hover:bg-gray-700 p-2 rounded">
        <FaCog />
      </button>
    </div>
  );
}

export default Sidebar;
