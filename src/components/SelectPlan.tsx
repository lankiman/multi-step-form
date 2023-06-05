interface Props {
  plantype: number;
  planTypearc: () => void;
  planTypeadv: () => void;
  planTypepro: () => void;
  planerror: number;
  switchState: boolean;
  setSwitchState: (state: boolean) => void;
  currentPlan: number;
  setcurrentPlan: (state: number) => void;
}

const SelectPlan = ({
  plantype,
  planTypeadv,
  planTypearc,
  planTypepro,
  planerror,
  switchState,
  setSwitchState,
  currentPlan,
  setcurrentPlan
}: Props) => {
  const testClick = () => {
    setcurrentPlan(currentPlan + 1);
  };

  let priceArc = "";
  let priceAdv = "";
  let pricePro = "";
  let freeMth = "";
  if (currentPlan == 0 || currentPlan % 2 == 0) {
    priceArc = "$9/mo";
    priceAdv = "$12/mo";
    pricePro = "$15/mo";
  } else {
    priceArc = "$90/yr";
    priceAdv = "$120/yr";
    pricePro = "$150/yr";
    freeMth = "2 months free";
  }

  const handleSlider = () => {
    setSwitchState(!switchState);
    testClick();
  };

  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl text-MarineBlue font-extrabold">
          Select your plan
        </h1>
        <p className="text-[12px] text-LightGray font-extrabold">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <p
        className={`text-sm ml-4 text-red-700 ${planerror === 1
          ? "block"
          : "hidden"}`}
      >
        Please Select a Plan to Continue
      </p>
      <div className="p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <button
            onClick={planTypearc}
            className={`flex flex-row md:flex-col gap-4 hover:border-PurplishBlue md:gap-6 p-2 items-center md:items-start w-full border-2 rounded-xl border-LightGray mx-auto ${plantype ===
            1
              ? "bg-Magnolia border-PurplishBlue"
              : ""}`}
          >
            <div className="bg-arcade bg-no-repeat h-10 w-10 rounded-[50%]" />
            <div className="flex items-start flex-col">
              <p className="text-MarineBlue font-extrabold">Arcade</p>
              <span className="text-CoolGray text-sm">
                {priceArc}
              </span>
              <span className="text-MarineBlue text-sm">
                {freeMth}
              </span>
            </div>
          </button>
          <button
            onClick={planTypeadv}
            className={`flex flex-row md:flex-col gap-4 hover:border-PurplishBlue md:gap-6 p-2 items-center md:items-start w-full border-2 rounded-xl border-LightGray mx-auto ${plantype ===
            2
              ? "bg-Magnolia border-PurplishBlue"
              : ""}`}
          >
            <div className="bg-advance bg-no-repeat  h-10 w-10 rounded-[50%]" />
            <div className="flex items-start flex-col">
              <p className="text-MarineBlue font-extrabold">Advanced</p>
              <span className="text-CoolGray text-sm">
                {priceAdv}
              </span>
              <span className="text-MarineBlue text-sm">
                {freeMth}
              </span>
            </div>
          </button>
          <button
            onClick={planTypepro}
            className={`flex flex-row md:flex-col gap-4 hover:border-PurplishBlue md:gap-6 p-2 items-center md:items-start w-full border-2 rounded-xl border-LightGray mx-auto ${plantype ===
            3
              ? "bg-Magnolia border-PurplishBlue"
              : ""}`}
          >
            <div className="bg-pro bg-no-repeat h-10 w-10 rounded-[50%]" />
            <div className=" flex items-start flex-col">
              <p className="text-MarineBlue font-extrabold">Pro</p>
              <span className="text-CoolGray text-sm">
                {pricePro}
              </span>
              <span className="text-MarineBlue text-sm">
                {freeMth}
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="w-[90%] mx-auto p-3 md:w-full rounded-sm">
        <div className=" bg-Magnolia flex flex-row p-2 text-sm justify-center">
          <p className="text-MarineBlue font-extrabold">Monthly</p>
          <button
            className={`relative flex items-center  h-5 rounded-full w-11 mx-2 bg-MarineBlue focus:outline-none`}
            onClick={handleSlider}
          >
            <span
              className={`slider h-4 ml-1 w-4 rounded-full bg-white shadow-md transform transition-transform duration-150 ${switchState
                ? "translate-x-5"
                : ""}`}
            />
          </button>

          <p className="text-CoolGray font-extrabold">Yearly</p>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
