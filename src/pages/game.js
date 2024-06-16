// pages/game.js
import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/Layout'; // Example layout component
import ChatHistory from '../components/Game/ChatHistory';
import ChatInput from '../components/Game/ChatInput';
import { UserContext } from '../context/UserContext';

const GamePage = () => {
  const { userData } = useContext(UserContext);

  if (!userData) {
    return <div>Loading...</div>;
  }
  const { name, role, background } = userData;
  
  const [messages, setMessages] = useState([]);
  const handleSendMessage = async (messageText) => {
    // Add user message to the chat history
    const newMessage = { text: messageText, isUser: true };
    setMessages([...messages, newMessage]);

    try {
      // Make API call to backend for generating story
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            name: name, 
            role: role, 
            background: background, 
            prompt: JSON.stringify(messages),
         }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from server');
      }

      const data = await response.json();

      // Add chatbot response to the chat history
      const chatbotResponse = { text: data.story, isUser: false };
      setMessages([...messages, newMessage, chatbotResponse]);

    } catch (error) {
      console.error('Error fetching response:', error);
      // Handle error or display a message to the user
    }
  };

  useEffect(() => {
    const sendMessage = async () => {
      const initialMessage = `My name is ${name}, I am a ${role}, and my background is ${background}.`;
      await handleSendMessage(initialMessage);
    };

    sendMessage();
  }, [name, role, background]);

  return (
    <Layout>
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Game Page</h1>
        <ChatHistory messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </Layout>
  );
};

export default GamePage;
