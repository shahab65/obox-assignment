import Option from "components/Option";
import Text from "components/Text";
import React from "react";
import useStyles from "./style";

const Options = () => {
  const classes = useStyles();

  return (
    <ul className={classes.options}>
      <Option />
      <Option />
      <Option isSelected={true} />
      <Option />
      <Option />
    </ul>
  );
};

export default Options;
