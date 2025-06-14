import React from "react";
import Sidebar from "../components/Sidebar";
import ChatPanel from "../components/ChatPanel";
import ToolPanel from "../components/ToolPanel";

function HomePage() {
  return (
    <div className="grid grid-cols-[80px_1fr_300px] h-screen">
      <Sidebar />
      <ChatPanel />
      <ToolPanel />
    </div>
  );
}

export default HomePage;
