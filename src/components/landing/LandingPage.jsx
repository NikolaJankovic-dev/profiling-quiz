import React from "react";
import profilingIntro from "@/assets/images/Profiling Intro/Profiling_Intro.webp";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const LandingPage = ({ step, setStep }) => {
  return (
    <div
      className="flex flex-col items-center justify-between h-screen px-4 py-10"
      style={{
        backgroundImage: step < 2 ? `url(${profilingIntro})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6 mt-14">
        <motion.h1
          className="text-white text-7xl font-bold"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: step === 0 ? 1 : 0, y: step === 0 ? 0 : -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          I <span className="text-[#E51E31]">DEFINE</span> ME
        </motion.h1>
        <motion.div
          className="text-white text-5xl font-bold text-center whitespace-pre-line"
            initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: step === 0 ? 1 : 0, y: step === 0 ? 0 : -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          EVERY CHALLENGE REVEALS YOUR GREATNESS. TAKE <br /> THE QUIZ TO
          DISCOVER HOW.
        </motion.div>
      </div>
      <motion.div className="w-full"
        initial={{  y: 150 }}
        animate={{  y: step === 0 ? 0 : 150 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Button className="bg-white text-[#DD7949] w-full rounded-full text-3xl py-8 font-bold" onClick={() => setStep(1)}>
          START NOW
        </Button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
