interface Props {
  onBack: () => void;
  onNext: () => void;
  onEffect: () => void;
  currentStep: number;
  handleClick: (click: number) => void;
}
const Navigation = ({
  currentStep,
  onBack,
  onNext,
  onEffect,
  handleClick
}: Props) => {
  const handleCickBack = () => {
    onBack();
    onEffect();
    handleClick(2);
  };
  const handleCickNext = () => {
    onNext();
    onEffect();
    handleClick(1);
  };

  let style = "";
  let navStyle = "";
  let next = "Next Step";

  if (currentStep == 0) {
    style = "invisible";
  }
  if (currentStep == 3) {
    next = "Confirm";
  }
  if (currentStep == 4) {
    navStyle = "hidden";
  }

  return (
    <div className={`bg-white md:mt-[-6%] lg:mt-5 ${navStyle}`}>
      <div className="flex flex-row justify-between p-4 w-full">
        <button
          onClick={handleCickBack}
          className={`text-CoolGray font-extrabold hover:text-MarineBlue ${style}`}
        >
          Go Back
        </button>
        <button
          onClick={handleCickNext}
          className="bg-MarineBlue hover:bg-PurplishBlue text-white font-extrabold p-2 rounded-[0.5rem]"
        >
          {next}
        </button>
      </div>
    </div>
  );
};
export default Navigation;
