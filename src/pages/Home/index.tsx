import SelectInput from "components/SelectInput";
import useStyles from "./style";
import useScience from "hooks/useScience";
const Home = () => {
  const classes = useStyles();
  const { scienceList, selected, onSelectScience } = useScience();

  return (
    <div className={classes.home}>
      <SelectInput
        options={scienceList}
        selected={selected}
        onSelectScience={onSelectScience}
      />
    </div>
  );
};

export default Home;
