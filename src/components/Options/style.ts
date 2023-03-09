import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(() => ({
  options: {
    position: "absolute",
    top: 12,
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 0 5px 0 rgba(0,0,0,0.42)",
    width: "100%",
  },
}));

export default useStyles;
