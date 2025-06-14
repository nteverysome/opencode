import React from "react";

function ChatPanel() {
  return (
    <div className="flex-1 bg-gray-900 text-white flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {/* Messages will be displayed here */}
      </div>
      <div className="p-4">
        <input
          type="text"
          className="w-full p-2 bg-gray-800 text-white rounded"
          placeholder="Type a message..."
        />
      </div>
    </div>
  );
}

export default ChatPanel;
