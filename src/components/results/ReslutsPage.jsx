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
    header: "UN EXPLORADOR \n AUDAZ",
    desc: "TE GUSTA VIVIR NUEVAS EXPERIENCIAS Y SENTIR LADRENALINA EN CADA NUEVO RETO.",
  },
  {
    header: "UN ESTRATEGA \n ENFOCADO",
    desc: "SUPERÁS TUS DESAFÍOS ESTUDIANDO CADA DETALLE Y MANTENIENDO SIEMPRE LA CALMA.",
  },
  {
    header: "UN VIAJERO \n VERSATIL",
    desc: "ENCARÁS CADA  DESAFÍO CON UNA MENTE ABIERTA PARA ENCONTRAR SIEMPRE NUEVAS POSIBILIDADES.",
  },
  {
    header: "UN  LÍDER \n INSPIRADOR",
    desc: "SABÉS QUE CADA DESAFÍO ES UNA OPORTUNIDAD PARA CRECER JUNTO A LOS QUE TE RODEAN Y MÁS.",
  },
];

const ReslutsPage = ({ step, setStep, answers, setAnswers }) => {
  const [bgImage, setBgImage] = useState(result1);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [result, setResult] = useState(1);

  useEffect(() => {
    const values = Object.values(answers);
    const counts = values.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    let mostCommon = null;
    let maxCount = 0;

    Object.entries(counts).forEach(([key, count]) => {
      if (count > maxCount) {
        mostCommon = key;
        maxCount = count;
      }
    });

    if (maxCount === 1) {
      // svi odgovori različiti => uzmi poslednji odgovor
      const lastAnswer = values[values.length - 1];
      setResult(getResultNumber(lastAnswer));
    } else {
      setResult(getResultNumber(mostCommon));
    }
  }, [answers]);

  const getResultNumber = (letter) => {
    switch (letter) {
      case "a":
        return 1;
      case "b":
        return 2;
      case "c":
        return 3;
      case "d":
        return 4;
      default:
        return 1; // fallback
    }
  };

  useEffect(() => {
    if (result === 2) {
      setBgImage(result2);
      setCurrentText(texts[1]);
      console.log("case 2");
    }
    if (result === 3) {
      setBgImage(result3);
      setCurrentText(texts[2]);
      console.log("case 3");
    }
    if (result === 4) {
      setBgImage(result4);
      setCurrentText(texts[3]);
      console.log("case 4");
    }
  }, [result]);

  const handleClick = () => {
    if (step === 5) {
      setStep(6);
    } else {
      setStep(0);
      setAnswers({
        1: "",
        2: "",
        3: "",
      });
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
      <div
        className=" text-7xl  text-center self-center perfect-moment relative z-10"
        style={{
          background: "#fff",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        I AM...
      </div>
      <div className="flex flex-col justify-between items-center row-span-2 px-4 py-10 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step === 5 ? 1 : 0 }}
          className="flex flex-col justify-center items-center row-span-2 gap-10 text-center mt-6 px-8"
        >
          <h1
            className="text-5xl"
            style={{
              background: "#fff",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {currentText.header}
          </h1>
          <h1
            className="text-3xl"
            style={{
              background: "#fff",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {currentText.desc}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step === 6 ? 1 : 0 }}
          className="flex flex-col justify-center items-center row-span-2 gap-10 text-center  px-8 absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <p className="text-6xl">¡LISTO PARA EL SIGUIENTE DESAFÍO!</p>
        </motion.div>
        <Button
          className="bg-white text-black w-full rounded-full text-3xl py-8   overflow-hidden"
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
           {step === 6 ? "¡VUELVE A JUGAR!" : "¡OK, PERFECTO!"}
          </motion.span>
        </Button>
      </div>
    </div>
  );
};

export default ReslutsPage;
