import React from "react";
import { createUseStyles } from "react-jss";
import Arrow from "../Icons/Arrow";
const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
  },
  input: {
    border: "1px solid #25262c",
    padding: 16,
    width: "100%",
  },
  arrow: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});
type Props = {
  value: string;
  onChange: (value: string) => void;
};
const Input = (props: Props) => {
  const { value, onChange } = props;
  const classes = useStyles();
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      alert("enter key");
    }
  };
  return (
    <div className={classes.wrapper}>
      <div>
        <input
          value={value}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          className={classes.input}
        />
        <Arrow direction="up" className={classes.arrow} />
      </div>
    </div>
  );
};

export default Input;
