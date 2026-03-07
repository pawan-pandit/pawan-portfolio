"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

const GlobalContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white/80 border border-neutral-700 hover:bg-neutral-800 hover:scale-105 transition-all shadow-lg backdrop-blur">
        
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

        <span className="text-sm font-medium">
          Contact Us
        </span>

        <MessageCircle size={16} />
      </button>
    </div>
  );
};

export default GlobalContact;