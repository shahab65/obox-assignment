import { useState, useRef } from "react";
import Input from "components/Input";
import Options from "components/Options";
import { OptionsType } from "type/Options";
import useOnClickOutside from "hooks/useOnClickOutside";
import useStyles from "./style";

type Props = {
  options: OptionsType;
  selected: string;
  onSelectScience: (id: string) => void;
  onAddScience: (name: string) => void;
};
const SelectInput = (props: Props) => {
  const { options, selected, onSelectScience, onAddScience } = props;
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
  const onSelectOption = (id: string) => {
    onSelectScience(id);
    const selectedOption = options.find((opt) => opt.id === id);
    if (selectedOption) {
      onInputChange(selectedOption.name);
    }
    onHideOptions();
  };
  const onAddOption = () => {
    onAddScience(value);
    setValue("");
  };
  return (
    <div className={classes.selectInput} ref={ref}>
      <Input
        value={value}
        onChange={onInputChange}
        onShowOptions={onShowOptions}
        onAddOption={onAddOption}
      />
      {showOptions && (
        <div className={classes.suggestions}>
          <Options
            options={options}
            selected={selected}
            onSelectScience={onSelectOption}
          />
        </div>
      )}
    </div>
  );
};

export default SelectInput;
