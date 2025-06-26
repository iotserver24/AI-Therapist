import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Index = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-100">
      {/* Header */}
      <div className="text-center pt-8 pb-4 py-0">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-2 my-0 mx-0 py-[10px] md:text-5xl">Just here to listen</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto px-4 py-[12px]">your soft space on hard days ❤️</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="flex justify-center items-center min-h-[60vh] px-0">
          {/* Main Card - Clickable */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 max-w-lg" onClick={() => navigate('/chat')}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Feeling off? We’re here for the real ones
          </h2>
            <p className="text-gray-700 leading-relaxed mb-6">vent, reflect, or just ramble — meet zara, your late-night, no-judgment vibe-check buddy. always here to hold space for whatever’s on your mind.</p>
            <div className="space-y-3 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>voice or text – totally your call</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>cozy corner to be your 100% self</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="px-0 py-0">built for your era, not your parents’</span>
              </div>
            </div>
            
            <Button className="w-full rounded-full bg-gradient-to-r from-pink-400 to-orange-400 hover:from-pink-500 hover:to-orange-500 text-white shadow-lg">
              start chatting with zara ✨
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;