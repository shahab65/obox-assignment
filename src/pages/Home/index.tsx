import SelectInput from "components/SelectInput";
import useStyles from "./style";
import useScience from "hooks/useScience";
const Home = () => {
  const classes = useStyles();
  const { scienceList } = useScience();

  return (
    <div className={classes.home}>
      <SelectInput options={scienceList} />
    </div>
  );
};

export default Home;
