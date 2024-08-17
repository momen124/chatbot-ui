import React, { useEffect, useState } from 'react';

const ChatMessages = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there! Nice to see you 😊', isBot: true },
    { id: 2, text: 'We have a 10% promo code for new customers!', isBot: true },
  ]);

  useEffect(() => {
    // TODO: Fetch messages from an API
  }, []);

  return (
    <div className="chat-messages flex-grow overflow-y-auto p-4">
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.isBot ? 'bot' : 'user'}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
