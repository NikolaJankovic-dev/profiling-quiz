import React, { useEffect } from "react";
import heading from "@/assets/images/heading.webp";
import { motion } from "motion/react";
//POINTS 1
import epic from "@/assets/images/Quiz1/Profiling_Q1 – a2 - noText.webp";
import head from "@/assets/images/Quiz2/Profiling_Q2 – a2 - noText.webp";
import fast from "@/assets/images/Quiz3/Profiling_Q3 – a2 - noText.webp";

//POINTS 2
import unique from "@/assets/images/Quiz1/Profiling_Q1 – a3 - noText.webp";
import plan from "@/assets/images/Quiz2/Profiling_Q2 – a3 - noText.webp";
import oneStep from "@/assets/images/Quiz3/Profiling_Q3 – a3 - noText.webp";

//POINTS 3
import winding from "@/assets/images/Quiz1/Profiling_Q1 – a4 - noText.webp";
import flow from "@/assets/images/Quiz2/Profiling_Q2 – a4 - noText.webp";
import spontaneous from "@/assets/images/Quiz3/Profiling_Q3 – a4 - noText.webp";

//POINTS 4
import worth from "@/assets/images/Quiz1/Profiling_Q1 – a5 - noText.webp";
import collaboration from "@/assets/images/Quiz2/Profiling_Q2 – a5 - noText.webp";
import leading from "@/assets/images/Quiz3/Profiling_Q3 – a5 - noText.webp";

const points1 = [
  { img: epic, text: "ÉPICO", value: "a" },
  { img: head, text: "DE FRENTE", value: "a" },
  { img: fast, text: "LO MÁS RÁPIDO POSIBLE", value: "a" },
];

const points2 = [
  { img: unique, text: "ÚNICO", value: "b" },
  { img: plan, text: "CON UN PLAN", value: "b" },
  { img: oneStep, text: "PASO A PASO", value: "b" },
];

const points3 = [
  { img: winding, text: "SORPRENDENTE", value: "c" },
  { img: flow, text: "DEJÁNDOME LLEVAR", value: "c" },
  { img: spontaneous, text: "ESPONTÁNEAMENTE", value: "c" },
];

const points4 = [
  { img: worth, text: "INOLVIDABLE", value: "d" },
  { img: collaboration, text: "EN EQUIPO", value: "d" },
  { img: leading, text: "LIDERÁNDOLO", value: "d" },
];

const allPoints = [points1, points2, points3, points4];

const headingTexts = [
  {
    step: 1,
    content: (
      <h1 className="text-4xl   text-white text-shadow flex items-center justify-center gap-2">
        <span
          className="mb-5"
          style={{
            background: "#fff",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {" "}
          MI{" "}
        </span>
        <span
          className="text-5xl -rotate-6 block perfect-moment"
          style={{
            background: "#E51E31",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          CAMINO
        </span>
        <span
          className="mt-5"
          style={{
            background: "#fff",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {" "}
          ES...
        </span>
      </h1>
    ),
  },
  {
    step: 2,
    content: (
      <h1 className="text-4xl   text-white text-shadow flex flex-col items-start justify-center">
        <span
          style={{
            background: "#fff",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ENCARO CADA{" "}
        </span>
        <span
          className="text-5xl -rotate-6 block ml-5  perfect-moment"
          style={{
            background: "#E51E31",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          DESAFÍO...
        </span>
      </h1>
    ),
  },
  {
    step: 3,
    content: (
      <h1 className="text-4xl   text-white text-shadow flex items-center justify-center gap-2">
        <span
          style={{
            background: "#fff",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {" "}
          ME ABRO{" "}
        </span>
        <span
          className="text-5xl -rotate-6 block mt-8 perfect-moment"
          style={{
            background: "#E51E31",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          CAMINO...
        </span>
      </h1>
    ),
  },
];

const GamePage = ({ step, setStep, setAnswers }) => {
  useEffect(() => {
    if (step === 4) {
      const timeout = setTimeout(() => {
        setStep(5);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [step]);
  return (
    <div className="absolute top-0 left-0 w-full h-full user-select-none overflow-hidden flex flex-col z-20">
      {/* Heading */}
      <motion.div
        initial={{ y: -180 }}
        animate={{ y: step < 1 || step > 3 ? -180 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ backgroundImage: `url(${heading})` }}
        className="bg-cover bg-center bg-no-repeat h-40 w-full flex items-center justify-center relative overflow-hidden"
      >
        {headingTexts.map(({ step: headingStep, content }, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            initial={{ y: "100%" }}
            animate={{
              y:
                step === headingStep
                  ? "0%"
                  : step < headingStep
                  ? "100%"
                  : "-100%",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {content}
          </motion.div>
        ))}
      </motion.div>

      {/* Questions container */}
      <div className="flex-1 flex flex-col">
        {allPoints.map((item, rowIndex) => {
          const isReversed = rowIndex % 2 === 1; // 1 i 3 red su reverse
          const slideWidth = 20; // svaki slide 20% (5 slajdova: prazan + 3 pitanja + prazan)

          // Ako je reversed, krećemo sa 0% i pomeramo u kontra smer
          const moveX = isReversed
            ? `${step * slideWidth - 80}%`
            : `${-step * slideWidth}%`;

          return (
            <div
              key={rowIndex}
              className="relative w-full h-full overflow-hidden"
            >
              <motion.div
                className={`flex w-[500%] h-full ${
                  isReversed ? "flex-row-reverse" : ""
                }`}
                initial={{ x: isReversed ? "-80%" : "0%" }}
                animate={{ x: moveX }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Prazan početak */}
                <div className="w-full flex items-center justify-center"></div>

                {/* Pitanja */}
                {item.map(({ img, text, value }, i) => (
                  <div
                    key={i}
                    className="w-full flex items-center justify-center "
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    onClick={() => {
                      setStep((prev) => prev + 1);
                      // setPoints((prev) => prev + rowIndex + 1);
                      setAnswers((prev) => ({
                        ...prev,
                        [i + 1]: value,
                      }));
                    }}
                  >
                    <h1
                      className="text-5xl text-white text-shadow text-center"
                      style={{
                        background: "#fff",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {text}
                    </h1>
                  </div>
                ))}

                {/* Prazan kraj */}
                <div className="w-full flex items-center justify-center"></div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamePage;
