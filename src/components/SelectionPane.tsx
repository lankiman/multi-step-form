import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Navigation from "./Navigation";
import Pickaddons from "./Pickaddons";
import FinishingUp from "./FinishingUp";
import ThankYou from "./ThankYou";

interface Props {
  onFormStepChange: (number: number) => void;
}

const SelectionPane = ({ onFormStepChange }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);

  //states cand call backs for personal info
  const [validName, setvalidName] = useState("");
  const [validEmail, setvalidEmail] = useState("");
  const [validPhone, setvalidPhone] = useState("");

  const handledName = (name: string) => {
    setvalidName(name);
  };
  const handledEmail = (email: string) => {
    setvalidEmail(email);
  };
  const handledPhone = (phone: string) => {
    setvalidPhone(phone);
  };

  let nameErr = -1;
  let emailErrOne = -1;
  let emailErrTwo = -1;
  let PhoneErrOne = -1;
  let PhoneErrTwo = -1;
  let validForm = -1;

  const validateForm = () => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (validName.trim() != "") {
      nameErr = 1;
    } else {
      nameErr = 0;
    }

    if (validEmail.trim() != "") {
      emailErrOne = 1;
    } else {
      emailErrOne = 0;
    }

    if (emailPattern.test(validEmail)) {
      emailErrTwo = 1;
    } else {
      emailErrTwo = 0;
    }

    if (validPhone.trim() != "") {
      PhoneErrOne = 1;
    } else PhoneErrOne = 0;

    if (phonePattern.test(validPhone)) {
      PhoneErrTwo = 1;
    } else PhoneErrTwo = 0;

    if (
      nameErr == 1 &&
      emailErrOne == 1 &&
      emailErrTwo == 1 &&
      PhoneErrOne == 1 &&
      PhoneErrTwo == 1
    ) {
      validForm = 1;
    } else validForm = 0;
  };

  const [clickSignal, setclickSignal] = useState(0);

  const handleClick = (click: number) => {
    setclickSignal(click);
  };

  if (clickSignal == 1) {
    validateForm();
  }

  if (clickSignal == 2) {
    nameErr = -1;
    emailErrOne = -1;
    emailErrTwo = -1;
    PhoneErrOne = -1;
    PhoneErrTwo = -1;
  }
  const renderName = validName;

  //states, call backs and funtions for select plan component
  const [planTypearc, setplanTypearc] = useState(false);
  const [planTypeadv, setplanTypeadv] = useState(false);
  const [planTypepro, setplanTypepro] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [currentPlan, setcurrentPlan] = useState(0);
  const handlePlanarc = () => {
    setplanTypearc(!planTypearc);
    setplanTypeadv(false);
    setplanTypepro(false);
  };
  const handlePlanadv = () => {
    setplanTypearc(false);
    setplanTypeadv(!planTypeadv);
    setplanTypepro(false);
  };
  const handlePlanpro = () => {
    setplanTypearc(false);
    setplanTypeadv(false);
    setplanTypepro(!planTypepro);
  };

  let plantype = 0;

  let [planerror, setplanerror] = useState(0);

  if (planTypearc == true) {
    plantype = 1;
    planerror = 0;
  } else if (planTypeadv == true) {
    plantype = 2;
    planerror = 0;
  } else if (planTypepro == true) {
    plantype = 3;
    planerror = 0;
  }

  //states, functions and call back for addons
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOnchange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleOnchange3 = () => {
    setIsChecked3(!isChecked3);
  };

  //functions for navigation
  const nextStep = () => {
    validateForm();
    if (currentStep == 1 && plantype == 0) {
      setplanerror(1);
      alert("Please select a plan to continue");
    } else if (currentStep == 0 && validForm == 0) {
      alert("Please fill all inputs fields correctly");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleStepChange = () => {
    onFormStepChange(currentStep);
  };
  handleStepChange();

  const changePlan = () => {
    setCurrentStep(currentStep - 2);
  };

  const onNext = () => {
    nextStep();
    handleStepChange();
    setclickSignal(1);
  };

  //form steps
  const formSteps = [
    {
      component: (
        <PersonalInfo
          handleName={handledName}
          handleEmail={handledEmail}
          handlePhone={handledPhone}
          nameErr={nameErr}
          emailErrOne={emailErrOne}
          emailErrTwo={emailErrTwo}
          phoneErrOne={PhoneErrOne}
          phoneErrTwo={PhoneErrTwo}
          nameValue={validName}
          emailValue={validEmail}
          phoneValue={validPhone}
          onNext={onNext}
        />
      )
    },
    {
      component: (
        <SelectPlan
          planTypearc={handlePlanarc}
          planTypeadv={handlePlanadv}
          planTypepro={handlePlanpro}
          plantype={plantype}
          planerror={planerror}
          switchState={switchState}
          setSwitchState={setSwitchState}
          currentPlan={currentPlan}
          setcurrentPlan={setcurrentPlan}
        />
      )
    },
    {
      component: (
        <Pickaddons
          isChecked={isChecked}
          OnChange={handleOnChange}
          isChecked2={isChecked2}
          OnChange2={handleOnchange2}
          isChecked3={isChecked3}
          OnChange3={handleOnchange3}
          Plan={currentPlan}
        />
      )
    },
    {
      component: (
        <FinishingUp
          planType={plantype}
          planDuration={currentPlan}
          onChange={changePlan}
          isChecked={isChecked}
          isChecked2={isChecked2}
          isChecked3={isChecked3}
        />
      )
    },
    { component: <ThankYou renderName={renderName} /> }
  ];
  const currentRender = formSteps[currentStep].component;

  return (
    <div className="h-full flex flex-col justify-between md:bg-inherit md:p-4 md:w-[55%] lg:ml-[-1%]">
      <div
        className={`text-black h-fit relative top-[-30%] rounded-2xl w-[90%] mx-auto sm:top-0 sm:mt-[-20%] bg-Alabaster md:mt-0 md:bg-inherit md:p-4  md:h-full md:w-full lg:ml-[-1%] ${currentStep ===
        4
          ? "h-[70%]"
          : ""}`}
      >
        {currentRender}
      </div>
      <Navigation
        onBack={backStep}
        onNext={nextStep}
        onEffect={handleStepChange}
        currentStep={currentStep}
        handleClick={handleClick}
      />
    </div>
  );
};

export default SelectionPane;
