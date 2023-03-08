import React from "react";
import useStyles from "./style";
export type TextType = "primary" | "secondary";

export type TextProps = {
  children: React.ReactNode;
  type?: TextType;
};

const Text = (props: TextProps) => {
  const { children, type = "primary" } = props;
  const classes = useStyles({ type });

  return <p className={classes.text}>{children}</p>;
};

export default Text;
