// components/Game/ChatHistory.js
import React from 'react';
import Message from './Message';

const ChatHistory = ({ messages }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      {messages.map((msg, index) => (
        <Message key={index} message={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  );
};

export default ChatHistory;
