interface Props {
  planType: number;
  planDuration: number;
  onChange: () => void;
  isChecked: boolean;
  isChecked2: boolean;
  isChecked3: boolean;
}

const FinishingUp = ({
  planType,
  planDuration,
  onChange,
  isChecked,
  isChecked2,
  isChecked3
}: Props) => {
  let plan = "";
  let duration = "";
  if (planType == 1) {
    plan = "Arcade";
  } else if (planType == 2) {
    plan = "Advanced";
  } else if (planType == 3) {
    plan = "Pro";
  }

  if (planDuration % 2 == 0) {
    duration = "Monthly";
  } else duration = "Yearly";

  let priceCalc = 0;
  let price = "";
  if (duration == "Monthly" && plan == "Arcade") {
    priceCalc = 9;
    price = "$9/mo";
  } else if (duration == "Monthly" && plan == "Advanced") {
    price = "$12/mo";
    priceCalc = 12;
  } else if (duration == "Monthly" && plan == "Pro") {
    price = "$15/mo";
    priceCalc = 15;
  }

  if (duration == "Yearly" && plan == "Arcade") {
    price = "$90/yr";
    priceCalc = 90;
  } else if (duration == "Yearly" && plan == "Advanced") {
    price = "$120/yr";
    priceCalc = 120;
  } else if (duration == "Yearly" && plan == "Pro") {
    price = "$150/yr";
    priceCalc = 150;
  }

  let addOne = "";
  let addTwo = "";
  let addThree = "";
  let addOnePrice = 0;
  let addTwoPrice = 0;
  let addThreePrice = 0;
  let perDuration = "";
  let priceDuration = "";

  if (planDuration % 2 == 0) {
    addOne = "+$1/mo";
    addTwo = "+$2/mo";
    addThree = "+$2/mo";
    perDuration = "per month";
    priceDuration = "/mo";
  } else {
    addOne = "+$10/yr";
    addTwo = "+$20/yr";
    addThree = "+$20/yr";
    perDuration = "per year";
    priceDuration = "/yr";
  }

  if (isChecked && planDuration % 2 == 0) {
    addOnePrice = 1;
  }
  if (isChecked2 && planDuration % 2 == 0) {
    addTwoPrice = 2;
  }
  if (isChecked3 && planDuration % 2 == 0) {
    addThreePrice = 2;
  }

  if (isChecked && planDuration % 2 != 0) {
    addOnePrice = 10;
  }
  if (isChecked2 && planDuration % 2 != 0) {
    addTwoPrice = 20;
  }
  if (isChecked3 && planDuration % 2 != 0) {
    addThreePrice = 20;
  }

  let Price = priceCalc + addOnePrice + addTwoPrice + addThreePrice;
  let totalPrice = `${Price}${priceDuration}`;

  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl text-MarineBlue font-extrabold">
          Finishing up
        </h1>
        <p className="text-[12px] text-LightGray font-extrabold">
          Double-check everything looks OK before confirming
        </p>
      </div>
      <div className="bg-Alabaster py-2 rounded mt-6">
        <div className="flex justify-between p-4 items-center text-sm">
          <div>
            <div className="flex flex-col items-start">
              <p className="text-MarineBlue font-extrabold">
                {plan}({duration})
              </p>
              <button
                onClick={onChange}
                className="underline text-CoolGray hover:text-PurplishBlue"
              >
                Change
              </button>
            </div>
          </div>
          <p className="text-MarineBlue font-extrabold">
            {price}
          </p>
        </div>
        <hr className="w-[95%] m-auto" />
        <div className="p-4 text-[12px] text-CoolGray flex flex-col gap-2">
          <div
            className={`flex justify-between flex-row ${!isChecked
              ? "hidden"
              : ""}`}
          >
            <p>Online service</p>
            <p>
              {addOne}
            </p>
          </div>
          <div
            className={`flex justify-between flex-row ${!isChecked2
              ? "hidden"
              : ""}`}
          >
            <p>Larger storage</p>
            <p>
              {addTwo}
            </p>
          </div>
          <div
            className={`flex justify-between flex-row ${!isChecked3
              ? "hidden"
              : ""}`}
          >
            <p>Customizable profile</p>
            <p>
              {addThree}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between p-4 text-[12px] text-CoolGray">
        <p>
          Total ({perDuration})
        </p>
        <p className="text-lg text-PurplishBlue font-extrabold">
          ${totalPrice}
        </p>
      </div>
    </div>
  );
};

export default FinishingUp;
