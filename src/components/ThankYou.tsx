import thankYouImage from "../assets/images/icon-thank-you.svg";

interface Props {
  renderName: string;
}

const ThankYou = ({ renderName }: Props) => {
  return (
    <div className="p-4 top-1/2 -translate-y-1/2 gap-4 relative flex flex-col items-center">
      <div>
        <img src={thankYouImage} alt="Thank You" className="" />
      </div>
      <div>
        <p className="text-MarineBlue font-extrabold text-2xl text-center">
          Thank You!
        </p>
      </div>
      <div>
        <p className="uppercase text-xl font-extrabold text-MarineBlue">
          {renderName}
        </p>
      </div>
      <div>
        <p className="text-center text-xs md:text-sm">
          Thanks for comfirming your subscription! We hope you have fun using
          our platform. If you ever need support, pleae feel free to email us at
          loremgaming@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
