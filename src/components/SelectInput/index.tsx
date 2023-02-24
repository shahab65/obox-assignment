import { useState } from "react";
import Input from "./Input";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  selectInput: {
    width: 600,
  },
});
const SelectInput = () => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const onInputChange = (value: string) => {
    setValue(value);
  };
  return (
    <div className={classes.selectInput}>
      <Input value={value} onChange={onInputChange} />
    </div>
  );
};

export default SelectInput;
