import { useState, useRef, RefObject } from "react";
import Input from "./Input";
import { createUseStyles } from "react-jss";
import Options from "components/Options";
import { OptionsType } from "type/Options";
import useOnClickOutside from "hooks/useOnClickOutside";

const useStyles = createUseStyles({
  selectInput: {
    width: 600,
  },
  suggestions: {
    position: "relative",
  },
});

type Props = {
  options: OptionsType;
  selected: number;
  onSelectScience: (id: number) => void;
};
const SelectInput = (props: Props) => {
  const { options, selected, onSelectScience } = props;
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => {
    onHideOptions();
  });

  const onShowOptions = () => setShowOptions(true);
  const onHideOptions = () => setShowOptions(false);
  const onInputChange = (value: string) => {
    setValue(value);
  };
  return (
    <div className={classes.selectInput} ref={ref}>
      <Input
        value={value}
        onChange={onInputChange}
        onShowOptions={onShowOptions}
      />
      {showOptions && (
        <div className={classes.suggestions}>
          <Options
            options={options}
            selected={selected}
            onSelectScience={onSelectScience}
          />
        </div>
      )}
    </div>
  );
};

export default SelectInput;
