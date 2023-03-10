import { createUseStyles } from "react-jss";
import { TextType } from "./index";
import { ThemeItem } from "theme";

const useStyles = createUseStyles((theme: ThemeItem) => ({
  text: ({ type }: { type: TextType }) => ({
    color: type === "primary" ? theme.primary : theme.secondary,
  }),
}));

export default useStyles;
