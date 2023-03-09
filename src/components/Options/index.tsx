import Option from "components/Option";
import Text from "components/Text";
import React from "react";
import useStyles from "./style";
import { OptionsType } from "../../type/Options";

type Props = {
  options: OptionsType;
};

const Options = (props: Props) => {
  const { options } = props;
  const classes = useStyles();

  return (
    <ul className={classes.options}>
      {options.map((option) => (
        <Option key={option.id} name={option.name} />
      ))}
    </ul>
  );
};

export default Options;
