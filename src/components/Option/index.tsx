import React from "react";
import useStyles from "./style";
import Text from "components/Text";

type Props = {
  isSelected?: boolean;
};

const Option = (props: Props) => {
  const { isSelected = false } = props;
  const classes = useStyles();

  return (
    <li className={classes.option}>
      <Text type={isSelected ? "secondary" : "primary"}>Education</Text>
    </li>
  );
};

export default Option;
