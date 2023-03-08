import Text from "components/Text";
import React from "react";
import useStyles from "./style";

const Options = () => {
  const classes = useStyles();

  return (
    <div className={classes.options}>
      <div>
        <Text type="secondary">Education</Text>
      </div>
      <div>Education</div>
      <div>Education</div>
      <div>Education</div>
      <div>Education</div>
      <div>Education</div>
    </div>
  );
};

export default Options;
