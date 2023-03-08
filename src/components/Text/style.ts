import { createUseStyles } from "react-jss";
import { TextType } from "./index";

const useStyles = createUseStyles(() => ({
  text: ({ type }: { type: TextType }) => ({
    color: type === "primary" ? "#505050" : "indigo",
  }),
}));

export default useStyles;
