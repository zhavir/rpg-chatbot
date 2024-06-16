// components/Game/ChatInput.js
import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') {
      return;
    }

    // Send message to parent component (game.js)
    onSendMessage(inputText);
    setInputText('');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-4">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <button
        onClick={handleSendMessage}
        className="mt-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
