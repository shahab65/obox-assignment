import { createUseStyles } from "react-jss";
const useStyles = createUseStyles<any, any, { isFocused: boolean }>({
  wrapper: {
    position: "relative",
  },
  input: {
    outline: 0,
    padding: 16,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: ({ isFocused }) => {
      return isFocused ? "indigo" : "#25262c";
    },
    borderRadius: 16,
    boxShadow: ({ isFocused }) => (isFocused ? " 0 0 2px 0 indigo" : ""),
  },
  arrow: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});
export default useStyles;
