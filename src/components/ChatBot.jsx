import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { AiOutlineSend, AiOutlineReload } from 'react-icons/ai';
import { FaRobot, FaUserCircle } from 'react-icons/fa';

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me anything about Josean Ralat.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (forcedInput) => {
    const textToSend = typeof forcedInput === 'string' ? forcedInput : input.trim();
    if (!textToSend || isLoading) return;

    setInput('');
    setError(false);
    const userMsg = { role: 'user', content: textToSend };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch('https://portfolio-chat-bot-puce.vercel.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages
        })
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.reply || data.content || "I'm sorry, I couldn't process that." 
      }]);
    } catch (err) {
      setError(true);
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
    <div className="flex flex-col w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-zinc-800 h-[500px] bg-zinc-950 text-zinc-100 mx-auto font-sans">
      <div className="bg-zinc-900/80 p-4 border-b border-zinc-800 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-500/20 rounded-lg text-green-500">
            <FaRobot size={20}/>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight">Josean's AI Assistant</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] text-zinc-400 uppercase font-medium">Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-zinc-800' : 'bg-green-600'}`}>
              {m.role === 'user' ? <FaUserCircle size={18} /> : <FaRobot size={16} />}
            </div>
            <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
              m.role === 'user' ? 'bg-green-600 text-white rounded-tr-none' : 'bg-zinc-900 border border-zinc-800 rounded-tl-none'
            }`}>
              <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-zinc-800 prose-pre:border prose-pre:border-zinc-700">
                <ReactMarkdown>
                  {m.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center"><FaRobot size={16} /></div>
            <div className="flex gap-1 items-center bg-zinc-900 px-4 py-3 rounded-2xl rounded-tl-none border border-zinc-800">
              <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center gap-2 p-4 bg-red-500/5 rounded-xl border border-red-500/20">
            <p className="text-xs text-red-400">Something went wrong. Please try again.</p>
            <button 
              onClick={() => sendMessage(messages[messages.length-1]?.content)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
            >
              <AiOutlineReload /> Retry
            </button>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-zinc-900/30 border-t border-zinc-800">
        {!isLoading && !error && (
          <div className="flex flex-wrap gap-2 mb-4">
            {['Skills', 'Projects', 'Experience'].map(btn => (
              <button
                key={btn}
                onClick={() => sendMessage(`Tell me about your ${btn.toLowerCase()}`)}
                className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-800 transition-all text-zinc-300"
              >
                {btn}
              </button>
            ))}
          </div>
        )}

        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about Josean..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-green-500 outline-none transition-all placeholder:text-zinc-600"
            disabled={isLoading}
          />
          <button
            onClick={() => sendMessage()}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1.5 p-2 text-green-500 hover:bg-green-500 hover:text-white rounded-lg disabled:opacity-20 transition-all"
          >
            <AiOutlineSend size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
}