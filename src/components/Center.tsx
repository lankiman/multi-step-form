import { useState } from "react";
import SelectionPane from "./SelectionPane";
import Sidebar from "./Sidebar";

const Center = () => {
  const [formStep, setformStep] = useState(0);

  const stepChange = (formStep: number) => {
    setformStep(formStep);
  };

  return (
    <div className="text-white w-full h-full md:w-[80%] lg:w-[60%] md:h-[70%] md:bg-white md:rounded-2xl flex flex-col md:flex-row">
      <Sidebar formStep={formStep} />
      <SelectionPane onFormStepChange={stepChange} />
    </div>
  );
};

export default Center;
