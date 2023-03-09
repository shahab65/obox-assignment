import Option from "components/Option";

import useStyles from "./style";
import { OptionsType } from "type/Options";

type Props = {
  options: OptionsType;
  selected: number;
  onSelectScience: (id: number) => void;
};

const Options = (props: Props) => {
  const { options, selected, onSelectScience } = props;
  const classes = useStyles();

  return (
    <ul className={classes.options}>
      {options.map((option) => (
        <Option
          key={option.id}
          id={option.id}
          name={option.name}
          isSelected={option.id === selected}
          onSelect={onSelectScience}
        />
      ))}
    </ul>
  );
};

export default Options;
