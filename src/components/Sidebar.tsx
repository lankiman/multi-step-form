interface Props {
  formStep: number;
}
const Sidebar = ({ formStep }: Props) => {
  let oneStyle;
  let twoStyle;
  let threeStyle;
  let fourStyle;

  if (formStep == 0) {
    oneStyle = true;
  } else oneStyle = false;

  if (formStep == 1) {
    twoStyle = true;
  } else twoStyle = false;
  if (formStep == 2) {
    threeStyle = true;
  } else threeStyle = false;
  if (formStep == 3 || formStep == 4) {
    fourStyle = true;
  } else fourStyle = false;

  return (
    <div className="h-1/2 sm:h-[95%] w-full md:h-full md:p-2 lg:h-full md:w-1/2 lg:w-[40%]">
      <div className="bg-sidebarMobile w-full h-full bg-contain bg-no-repeat md:bg-sidebarDesktop flex flex-col md:flex-row md:min-h-full">
        <div className="flex mt-[11%] justify-center gap-4 md:gap-6 md:flex-col md:mt-5 md:ml-8 md:h-[50%] uppercase">
          <div className="md:flex md:gap-5 md:items-center">
            <div>
              <p
                className={`border border-LightGray w-8 p-1 rounded-[50%] text-center ${oneStyle
                  ? "bg-LightBlue text-black border-none"
                  : ""}`}
              >
                1
              </p>
            </div>
            <div className="hidden md:flex md:flex-col">
              <p className="text-[11px] text-LightGray">step 1</p>
              <p className="font-extrabold text-sm">your info</p>
            </div>
          </div>
          <div className="md:flex md:gap-5 md:items-center">
            <div>
              <p
                className={`border border-LightGray w-8 p-1 rounded-[50%] text-center ${twoStyle
                  ? "bg-LightBlue text-black border-none"
                  : ""}`}
              >
                2
              </p>
            </div>
            <div className="hidden md:flex md:flex-col">
              <p className="text-[11px] text-LightGray">step 2</p>
              <p className="font-extrabold text-sm">select plan</p>
            </div>
          </div>
          <div className="md:flex md:gap-5 md:items-center">
            <div>
              <p
                className={`border border-LightGray w-8 p-1 rounded-[50%] text-center ${threeStyle
                  ? "bg-LightBlue text-black border-none"
                  : ""}`}
              >
                3
              </p>
            </div>
            <div className="hidden md:flex md:flex-col">
              <p className="text-[11px] text-LightGray">step 3</p>
              <p className="text-sm font-extrabold">add-ons</p>
            </div>
          </div>
          <div className="md:flex md:gap-5 md:items-center">
            <div>
              <p
                className={`border border-LightGray w-8 p-1 rounded-[50%] text-center ${fourStyle
                  ? "bg-LightBlue text-black border-none"
                  : ""}`}
              >
                4
              </p>
            </div>
            <div className="hidden md:flex md:flex-col">
              <p className="text-[11px] text-LightGray">step 4</p>
              <p className="text-sm font-extrabold">summary</p>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Sidebar;
