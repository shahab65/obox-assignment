import Arrow from "components/Icons/Arrow";
import useIsFocused from "hooks/useIsFocused";
import useStyles from "./style";
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
