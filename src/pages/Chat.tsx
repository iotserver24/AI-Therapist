
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ChatInterface from '../components/ChatInterface';
import AITherapist from '../components/AITherapist';
import { Button } from '@/components/ui/button';

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-100">
      {/* Header with back button */}
      <div className="flex items-center justify-between p-4">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          size="sm"
          className="rounded-full border-pink-300 hover:bg-pink-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          back to home
        </Button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          chat with zara 💜
        </h1>
        <div></div> {/* Spacer for center alignment */}
      </div>

      {/* Chat Interface */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - AI Therapist */}
          <div className="space-y-4">
            <AITherapist />
          </div>

          {/* Right Side - Chat Interface */}
          <div className="space-y-4">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
