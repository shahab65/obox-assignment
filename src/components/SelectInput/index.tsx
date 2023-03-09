import { useState } from "react";
import Input from "./Input";
import { createUseStyles } from "react-jss";
import Options from "components/Options";
const useStyles = createUseStyles({
  selectInput: {
    width: 600,
  },
  suggestions: {
    position: "relative",
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
      <div className={classes.suggestions}>
        <Options />
      </div>
    </div>
  );
};

export default SelectInput;
