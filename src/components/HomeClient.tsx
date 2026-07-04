"use client";
import { motion } from "motion/react";

function HomeClient() {
  return (
    <div className="min-h-screen bg-linear-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl cursor-pointer">
            Support.<span className="text-zinc-400 font-bold">AI</span>
          </div>
          <motion.button>Login</motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default HomeClient;
