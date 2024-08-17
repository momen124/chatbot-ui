import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface ChatHeaderProps {
  isMinimized: boolean;
  toggleMinimize: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ isMinimized, toggleMinimize }) => {
  return (
    <div className={`flex items-center justify-between p-2 bg-gray-800 text-white ${isMinimized ? 'h-12' : 'h-16'}`}>
      <div className="flex items-center">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Avatar"
          className="rounded-full w-10 h-10"
        />
        <div className="ml-2">
          <p className="font-semibold">John Doe</p>
          {/* Keep "Online" status always visible */}
          <p className={`text-green-400 ${isMinimized ? 'hidden' : ''}`}>
            Online
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <FaAngleDown
          className="cursor-pointer"
          onClick={toggleMinimize}
        />
        <BsThreeDotsVertical className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatHeader;
