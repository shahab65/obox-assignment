import React from "react";
import useStyles from "./style";
import Text from "components/Text";
import Tick from "../Icons/Tick";

type Props = {
  isSelected?: boolean;
  name: string;
};

const Option = (props: Props) => {
  const { name, isSelected = false } = props;
  const classes = useStyles();

  return (
    <li className={classes.option}>
      <Text type={isSelected ? "secondary" : "primary"}>{name}</Text>
      {isSelected && <Tick />}
    </li>
  );
};

export default Option;
