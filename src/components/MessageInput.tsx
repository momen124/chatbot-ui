import React, { useState } from 'react';
import { FaPaperPlane, FaSmile, FaPaperclip } from 'react-icons/fa'; // Added FaPaperclip for attachments

const MessageInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // TODO: Send the message to the backend API
      console.log('User message:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-4 py-2 flex items-center">
        {/* Attachments */}
        <button className="text-gray-500 mr-2">
          <FaPaperclip />
        </button>

        {/* Emoji Picker */}
        <button className="text-gray-500 mr-2">
          <FaSmile />
        </button>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your message..."
          className="flex-grow border rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleSendMessage} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
