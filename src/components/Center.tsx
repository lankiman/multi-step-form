import { useState } from "react";
import SelectionPane from "./SelectionPane";
import Sidebar from "./Sidebar";

const Center = () => {
  const [formStep, setformStep] = useState(0);

  const stepChange = (formStep: number) => {
    setformStep(formStep);
  };

  let isMobileLandscape = 0;
  if (window.innerHeight < 450 && window.orientation === 90) {
    isMobileLandscape = 1;
  }
  console.log(isMobileLandscape);

  return (
    <div
      className={`text-white ${isMobileLandscape
        ? "h-[100vh]"
        : "h-full md:h-[70%]"} w-full md:w-[80%] lg:w-[60%]  md:bg-white md:rounded-2xl flex flex-col md:flex-row`}
    >
      <Sidebar formStep={formStep} />
      <SelectionPane onFormStepChange={stepChange} />
    </div>
  );
};

export default Center;
