import Option from "components/Option";

import useStyles from "./style";
import { OptionsType } from "type/Options";

type Props = {
  options: OptionsType;
};

const Options = (props: Props) => {
  const { options } = props;
  const classes = useStyles();

  return (
    <ul className={classes.options}>
      {options.map((option) => (
        <Option key={option.id} name={option.name} isSelected />
      ))}
    </ul>
  );
};

export default Options;
