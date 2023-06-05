import { useState } from "react";

interface Props {
  handleName: (name: string) => void;
  handleEmail: (email: string) => void;
  handlePhone: (phone: string) => void;
  nameErr: number;
  emailErrOne: number;
  emailErrTwo: number;
  phoneErrOne: number;
  phoneErrTwo: number;
  nameValue: string;
  emailValue: string;
  phoneValue: string;
  onNext: () => void;
}

const PersonalInfo = ({
  handleName,
  handleEmail,
  handlePhone,
  nameErr,
  emailErrOne,
  emailErrTwo,
  phoneErrOne,
  phoneErrTwo,
  nameValue,
  emailValue,
  phoneValue,
  onNext
}: Props) => {
  const [name, setname] = useState(nameValue);
  const [email, setemail] = useState(emailValue);
  const [phone, setphone] = useState(phoneValue);

  handleName(name);
  handleEmail(email);
  handlePhone(phone);

  let borderStyle = "";
  let errorMessage = "";
  let emailBdStyle = "";
  let phoneBdStyle = "";
  let phoneMessage = "";

  if (nameErr == 0) {
    borderStyle = "border-StrawberryRed";
  }

  if (emailErrOne == 0) {
    errorMessage = "This Field is Required";
    emailBdStyle = "border-StrawberryRed";
  }

  if (emailErrOne == 1 && emailErrTwo == 0) {
    errorMessage = "invalid Email adress";
    emailBdStyle = "border-StrawberryRed";
  }

  if (phoneErrOne == 0) {
    phoneMessage = "This Field is Required";
    phoneBdStyle = "border-StrawberryRed";
  }

  if (phoneErrOne == 1 && phoneErrTwo == 0) {
    phoneMessage = "invalid Phone number";
    phoneBdStyle = "border-StrawberryRed";
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextField: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const form = e.currentTarget.form;

      if (form) {
        const inputs = Array.from(form.elements) as HTMLInputElement[];
        const currentIndex = inputs.findIndex(
          input => input.name === e.currentTarget.name
        );
        const nextInput = inputs[currentIndex + 1];

        if (nextInput) {
          nextInput.focus();
        } else {
          onNext();
          const firstInput = inputs[0];
          firstInput.focus();
        }
      }
    }
    return nextField;
  };

  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl text-MarineBlue font-extrabold">
          Personal info
        </h1>
        <p className="text-[12px] text-LightGray font-extrabold">
          Please Provide your name, email adress, and phone number
        </p>
        <form className="flex flex-col mt-4">
          <label
            className="text-sm text-MarineBlue py-1 font-extrabold flex flex-row items-center justify-between "
            htmlFor="name"
          >
            <p>Name</p>
            <span
              className={`text-xs text-StrawberryRed ${nameErr
                ? "hidden"
                : "visible"}`}
            >
              This Feild is Required
            </span>
          </label>
          <input
            className={`border-2 text-sm p-2 rounded-sm outline-none ${borderStyle}`}
            type="text"
            placeholder="e.g Stephen King"
            value={name}
            onChange={e => setname(e.target.value)}
            onKeyDown={e => handleKeyDown(e, "name")}
          />
          <label
            className="text-sm text-MarineBlue py-1 font-extrabold flex flex-row items-center justify-between mt-6"
            htmlFor="email"
          >
            <p>Email Adress</p>
            <span className={`text-xs text-StrawberryRed`}>
              {errorMessage}
            </span>
          </label>
          <input
            className={`border-2 text-sm p-2 rounded-sm outline-none ${emailBdStyle}`}
            name="email"
            type="email"
            placeholder="e.g stephenking@lorem.com"
            value={email}
            onChange={e => setemail(e.target.value)}
            onKeyDown={e => handleKeyDown(e, "email")}
          />
          <label
            className="text-sm text-MarineBlue py-1 font-extrabold flex flex-row items-center justify-between mt-6"
            htmlFor="phone"
          >
            <p>Phone Number</p>
            <span className={`text-xs text-StrawberryRed`}>
              {phoneMessage}
            </span>
          </label>
          <input
            className={`border-2 text-sm p-2 rounded-sm outline-none ${phoneBdStyle}`}
            type="text"
            name="phone"
            placeholder="e.g +1 234 567 890"
            value={phone}
            onChange={e => setphone(e.target.value)}
            onKeyDown={e => handleKeyDown(e, "phone")}
          />
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
