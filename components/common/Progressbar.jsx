"use client";
import { motion } from "framer-motion";

const Progressbar = ({ step }) => {
  const totalSteps = 4;
  const progressPercent = Math.round(((step - 1) / (totalSteps - 1)) * 100);

  return (
    <div className="w-full max-w-2xl mb-8">
      {/* Step info */}
      <div className="flex justify-between mb-2 text-sm font-semibol text-white">
        <span>
          Step {step} of {totalSteps}
        </span>
        <span>{progressPercent}%</span>
      </div>

      {/* Progress bar container */}
      <div className="w-full bg-gray-200/30 rounded-full h-4 relative overflow-hidden">
        {/* Glow behind the bar */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-20 blur-sm rounded-full" />

        {/* Animated progress fill */}
        <motion.div
          className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Progressbar;
