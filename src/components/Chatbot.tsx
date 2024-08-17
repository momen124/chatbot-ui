import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';

const Chatbot: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(true);

  const toggleMinimize = () => {
    setIsMinimized(prev => !prev);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-1">
        <ChatHeader isMinimized={isMinimized} toggleMinimize={toggleMinimize} />
        <ChatMessages />
      </div>
      <MessageInput />
    </div>
  );
};

export default Chatbot;
