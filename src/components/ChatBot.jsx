import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { FaRobot, FaUserCircle } from 'react-icons/fa';

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me anything about Josean Ralat.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);



  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('https://portfolio-chat-bot-puce.vercel.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };


  return (
    <div className="flex flex-col w-full max-w-md  rounded-2xl shadow-xl overflow-hidden border border-zinc-800 h-[500px]">
    
      <div className="bg-green-500 p-4 rounded-t-2xl bg-opacity-55">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <FaRobot size={22}/> Ai Assistant
        </h3>
        <p className="text-xs mt-1">
          Ask me about Josean's Professional Information
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-800 bg-opacity-35 h-96 ">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-2 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.role === 'assistant' && (
              <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-sm">
                <FaRobot size={14}/>
              </div>
            )}
            
            <div
              className={` p-3 rounded-lg text-sm ${
                message.role === 'user'
                  ? 'bg-green-600 text-white rounded-tr-none'
                  : 'bg-gray-700 text-gray-100 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>

            {message.role === 'user' && ( 
                <FaUserCircle size={24}/>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-2 justify-start">
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-sm">
              <FaRobot size={14}/>
            </div>
            <div className="bg-gray-700 text-gray-100 p-3 rounded-lg rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-zinc-900 p-3 border-t border-zinc-800 rounded-b-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 p-2 text-sm bg-zinc-800 text-gray-100 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <AiOutlineSend size={20}/>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mt-2">
          {['Skills', 'Projects', 'Education'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(`Tell me about ${suggestion.toLowerCase()}`)}
              className="text-xs px-2 py-1 border border-zinc-800  rounded-full hover:bg-gray-600 hover:text-green-400 transition-colors"
              disabled={isLoading}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}