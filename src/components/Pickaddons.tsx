interface Props {
  Plan: number;
  OnChange: () => void;
  isChecked2: boolean;
  OnChange2: () => void;
  isChecked3: boolean;
  OnChange3: () => void;
  isChecked: boolean;
}

const Pickaddons = ({
  Plan,
  OnChange,
  isChecked,
  OnChange2,
  isChecked2,
  OnChange3,
  isChecked3
}: Props) => {
  let addons1 = "+$1/mo";
  let addons2 = "+$2/mo";

  if (Plan % 2 != 0) {
    addons1 = "+$10/yr";
    addons2 = "+$20/yr";
  }
  return (
    <div className="">
      <div className="p-4 md:p-0 lg:p-4">
        <h1 className="text-2xl text-MarineBlue font-extrabold">
          Pick add-ons
        </h1>
        <p className="text-[12px] text-LightGray font-extrabold">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      <div className="">
        <div className="p-4">
          <section
            className={`flex rounded-lg items-center border-2 p-2 ${isChecked
              ? "border-PurplishBlue bg-Magnolia"
              : ""}`}
          >
            <input
              className="w-5 h-5 cursor-pointer mr-4"
              type="checkbox"
              checked={isChecked}
              onChange={OnChange}
            />
            <div>
              <h3 className="font-extrabold">Online service</h3>
              <p className="text-[12px]">Acess to multiplayer games</p>
            </div>
            <p className="ml-auto text-PurplishBlue font-bold">
              {addons1}
            </p>
          </section>
          <section
            className={`flex rounded-lg items-center mt-2 border-2 p-2 ${isChecked2
              ? "border-PurplishBlue bg-Magnolia"
              : ""}`}
          >
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer mr-4"
              checked={isChecked2}
              onChange={OnChange2}
            />
            <div>
              <h3 className=" font-extrabold">Larger Storage</h3>
              <p className="text-[12px]">Extra 1TB of cloud space</p>
            </div>
            <p className="ml-auto text-PurplishBlue font-bold">
              {addons2}
            </p>
          </section>
          <section
            className={`flex rounded-lg items-center mt-2 border-2 p-2 ${isChecked3
              ? "border-PurplishBlue bg-Magnolia"
              : ""}`}
          >
            <input
              className="w-5 h-5 mr-4"
              type="checkbox"
              checked={isChecked3}
              onChange={OnChange3}
            />
            <div>
              <h3 className=" font-extrabold">Customizable profile</h3>
              <p className="text-[12px]">Custom theme on your profile</p>
            </div>
            <p className="ml-auto text-PurplishBlue font-bold">
              {addons2}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Pickaddons;
