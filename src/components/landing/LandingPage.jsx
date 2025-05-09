import React from "react";
import profilingIntro from "@/assets/images/Profiling Intro/Profiling_Intro.webp";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const LandingPage = ({ step, setStep }) => {
  return (
    <div
      className="flex flex-col items-center justify-between h-full px-4 py-10"
      style={{
        backgroundImage: step < 2 ? `url(${profilingIntro})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6 mt-14">
        <motion.h1
          className="text-white text-5xl text-center flex flex-col"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: step === 0 ? 1 : 0, y: step === 0 ? 0 : -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex gap-2">
            <span className="inline-block "> LA </span>
            <span className="perfect-moment mx-2 inline-block ">
              {" "}
              GRANDEZA{" "}
            </span>
          </div>
          ESTÁ EN VOS.
        </motion.h1>
        <motion.div
          className="text-white text-4xl text-center whitespace-pre-line"
          style={{
            background: "#FFFFFF",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: step === 0 ? 1 : 0, y: step === 0 ? 0 : -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          CADA DESAFÍO REVELA TU ESENCIA. HACÉ EL TEST Y DESCUBRÍ EL ESPÍRITU
          MARLBORO QUE SE ALINEA CON VOS.
        </motion.div>
      </div>
      <motion.div
        className="w-full"
        initial={{ y: 150 }}
        animate={{ y: step === 0 ? 0 : 150 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Button
          className="bg-white  w-full rounded-full text-3xl py-8 cursor-pointer "
          onClick={() => setStep(1)}
        >
          COMENZÁ AHORA
        </Button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
