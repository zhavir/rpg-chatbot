// components/Game/Message.js
import React from 'react';

const Message = ({ message, isUser }) => {
  const messageClass = isUser ? 'text-right text-blue-600' : 'text-left text-gray-800';

  return (
    <div className={`mb-2 ${messageClass}`}>
      <p className="bg-gray-200 rounded-lg p-2 inline-block">{message}</p>
    </div>
  );
};

export default Message;
