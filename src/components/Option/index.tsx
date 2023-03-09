import React from "react";
import useStyles from "./style";
import Text from "components/Text";
import Tick from "../Icons/Tick";

type Props = {
  id: number;
  isSelected?: boolean;
  name: string;
  onSelect: (id: number) => void;
};

const Option = (props: Props) => {
  const { id, name, isSelected = false, onSelect } = props;
  const classes = useStyles();
  const onSelectOption = () => {
    onSelect(id);
  };
  return (
    <li className={classes.option} onClick={onSelectOption}>
      <Text type={isSelected ? "secondary" : "primary"}>{name}</Text>
      {isSelected && <Tick />}
    </li>
  );
};

export default Option;
