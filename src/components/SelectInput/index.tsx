import { useState } from "react";
import Input from "./Input";

const SelectInput = () => {
  const [value, setValue] = useState("");
  const onInputChange = (value: string) => {
    setValue(value);
  };
  return (
    <div>
      <Input value={value} onChange={onInputChange} />
    </div>
  );
};

export default SelectInput;
