import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Arrow from "../Icons/Arrow";
import useIsFocused from "../../hooks/useIsFocused";
const useStyles = createUseStyles<any, any, { isFocused: boolean }>({
  wrapper: {
    position: "relative",
  },
  input: {
    outline: 0,
    padding: 16,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: ({ isFocused }) => {
      return isFocused ? "indigo" : "#25262c";
    },
    borderRadius: 16,
    boxShadow: ({ isFocused }) => (isFocused ? " 0 0 2px 0 indigo" : ""),
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
  onAddOption: () => void;
  onShowOptions: () => void;
};
const Input = (props: Props) => {
  const { value, onChange, onShowOptions, onAddOption } = props;
  const { isFocused, onFocus, onBlur } = useIsFocused();
  const classes = useStyles({ isFocused });
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onAddOption();
    }
  };
  const onInputFocus = () => {
    onShowOptions();
    onFocus();
  };
  return (
    <div className={classes.wrapper}>
      <div>
        <input
          value={value}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          className={classes.input}
          onFocus={onInputFocus}
          onBlur={onBlur}
        />
        <Arrow
          direction={isFocused ? "up" : "down"}
          className={classes.arrow}
          fill={isFocused ? "indigo" : "#25262c"}
        />
      </div>
    </div>
  );
};

export default Input;
