import React, { useState, useEffect } from "react";
import result1 from "@/assets/images/Profiling Results/Profiling_Profile-1 - noText.webp";
import result2 from "@/assets/images/Profiling Results/Profiling_Profile-2 - noText.webp";
import result3 from "@/assets/images/Profiling Results/Profiling_Profile-3 - noText.webp";
import result4 from "@/assets/images/Profiling Results/Profiling_Profile-4 - noText.webp";
import outro from "@/assets/images/Outro/Outro - noText.webp";
import { Button } from "../ui/button";
import { motion } from "motion/react";
const texts = [
  {
    header: "AN ADVENTUROUS \n EXPLORER",
    desc: "YOU SEEK NEW EXPERIENCES AND THE THRILL OF AN UNMET CHALLENGE.",
  },
  {
    header: "A FOCUSED \n ACHIEVER",
    desc: "YOU MASTER CHALLENGES WITH ATTENTION TO DETAIL AND CALM CONSIDERATION.",
  },
  {
    header: "A REFLECTIVE \n WANDERER",
    desc: "YOU OVERCOME CHALLENGES BY KEEPING YOUR MIND OPEN TO MANY POSSIBILITIES.",
  },
  {
    header: "A COLLECTIVE \n LEADER",
    desc: "YOU KNOW CHALLENGES ARE SOLVED BY INSPIRING YOURSELF AND OTHERS TO RISE TO THE OCCASION.",
  },
];

const ReslutsPage = ({ step, setStep, points, setPoints }) => {
  const [bgImage, setBgImage] = useState(result1);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    if (points > 4) {
      setBgImage(result2);
      setCurrentText(texts[1]);
      console.log("case 2");
    }
    if (points > 7) {
      setBgImage(result3);
      setCurrentText(texts[2]);
      console.log("case 3");
    }
    if (points > 10) {
      setBgImage(result4);
      setCurrentText(texts[3]);
      console.log("case 4");
    }
  }, [points]);

  const handleClick = () => {
    if (step === 5) {
      setStep(6);
    } else {
      setStep(0);
      setPoints(0);
    }
  };
  return (
    <div
      className="absolute top-0 left-0 w-full h-full grid grid-cols-1 grid-rows-3 z-0 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 6 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${outro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
      <div className=" text-7xl  text-center self-center perfect-moment relative z-10">
        I AM...
      </div>
      <div className="flex flex-col justify-between items-center row-span-2 px-4 py-10 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step === 5 ? 1 : 0 }}
          className="flex flex-col justify-center items-center row-span-2 gap-10 text-center mt-6 px-8"
        >
          <h1 className="text-5xl">{currentText.header}</h1>
          <h1 className="text-3xl">{currentText.desc}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step === 6 ? 1 : 0 }}
          className="flex flex-col justify-center items-center row-span-2 gap-10 text-center  px-8 absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <p className="text-6xl">ALLWAYS READY FOR THE NEXT CHALLENGE</p>
        </motion.div>
        <Button
  className="bg-white text-black w-full rounded-full text-3xl py-8 font-bold overflow-hidden"
  onClick={handleClick}
>
  <motion.span
    key={step} // VAŽNO: Key mora biti različit za različite tekstove da animacija proradi
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="w-full text-center block"
  >
    {step === 5 ? "GOT IT!" : "PLAY AGAIN"}
  </motion.span>
</Button>
      </div>
    </div>
  );
};

export default ReslutsPage;
