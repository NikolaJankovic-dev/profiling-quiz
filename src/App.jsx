import { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
import GamePage from "./components/game/GamePage";
import ReslutsPage from "./components/results/ReslutsPage";

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    1: '',
    2: '',
    3: '',
  });
  return (
    <div className="  flex items-center justify-center bg-gray-700 overflow-hidden" style={{height: window.innerHeight}}>
      <div className=" sm:rounded-lg rounded-none shadow-lg  sm:aspect-[9/16] aspect-auto w-full sm:w-auto relative" style={{height: window.innerHeight}}>
        <LandingPage step={step} setStep={setStep} />
       
        {(step === 4 || step === 5 || step === 6) && (
          <ReslutsPage
            step={step}
            setStep={setStep}
            answers={answers}
            setAnswers={setAnswers}
          />
        )} {step > 0 && step < 5 && (
          <GamePage
            step={step}
            setStep={setStep}
            answers={answers}
            setAnswers={setAnswers}
          />
        )}
      </div>
    </div>
  );
}

export default App;
