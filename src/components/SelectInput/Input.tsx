import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};
const Input = (props: Props) => {
  const { value, onChange } = props;
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      alert("enter key");
    }
  };
  return (
    <div>
      <input value={value} onChange={onInputChange} onKeyDown={onKeyDown} />
    </div>
  );
};

export default Input;
