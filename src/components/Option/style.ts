import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  option: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer",
    "&:hover": {
      background: "rgba(0,0,255,.1)",
    },
  },
}));

export default useStyles;
