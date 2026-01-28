import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppBtn = () => {
  return (
    <a 
      href="https://wa.me/34654212212" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center gap-2 group hover:scale-105"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
        Escríbenos
      </span>
    </a>
  );
};

export default WhatsAppBtn;