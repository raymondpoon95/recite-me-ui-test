import React from "react";

type ButtonComponentProps = {
  buttonText: string;
} & React.ComponentPropsWithoutRef<"button">;

const ButtonComponent = ({
  buttonText,
  onClick,
  type,
}: ButtonComponentProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className="text-white bg-sky-400 py-3 px-5 rounded-md min-w-32 font-semibold"
      >
        {buttonText}
      </button>
    </>
  );
};

export default ButtonComponent;
