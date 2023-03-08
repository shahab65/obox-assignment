import SelectInput from "components/SelectInput";
import useStyles from "./style";
const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <SelectInput />
    </div>
  );
};

export default Home;
