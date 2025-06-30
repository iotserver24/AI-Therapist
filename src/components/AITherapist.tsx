
import React, { useState, useEffect } from 'react';

const AITherapist = () => {
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("hey bestie! i'm zara 💜");

  const messages = [
    "hey bestie! i'm zara 💜",
    "what's the vibe today?",
    "i'm literally always here for you",
    "let's unpack this together ✨",
    "you're doing amazing, no cap",
    "tell me what's on your mind fr"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isListening && !isThinking) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setCurrentMessage(randomMessage);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isListening, isThinking]);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* AI Ball */}
      <div className="relative">
        <div className={`w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 shadow-2xl flex items-center justify-center transition-all duration-500 ${
          isListening ? 'scale-110 shadow-pink-400/50' : 'scale-100'
        } ${isThinking ? 'animate-pulse' : ''}`}>
          {/* Listening indicator */}
          {isListening && (
            <div className="absolute inset-0 rounded-full border-4 border-pink-300 animate-ping"></div>
          )}
          
          {/* Face/Expression */}
          <div className="text-white text-4xl">
            {isListening ? '👂' : isThinking ? '🤔' : '😊'}
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            isListening ? 'bg-green-100 text-green-800' : 
            isThinking ? 'bg-orange-100 text-orange-800' : 
            'bg-pink-100 text-pink-800'
          }`}>
            {isListening ? 'listening...' : isThinking ? 'processing...' : 'ready to vibe'}
          </div>
        </div>
      </div>

      {/* Message bubble */}
      <div className="max-w-xs">
        <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-lg border border-pink-200">
          <p className="text-gray-800 text-center text-sm">
            {currentMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AITherapist;
