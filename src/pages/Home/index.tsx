import SelectInput from "components/SelectInput";
import useStyles from "./style";
import useScience from "hooks/useScience";
const Home = () => {
  const classes = useStyles();
  const { scienceList, selected, onSelectScience, onAddScience } = useScience();

  return (
    <div className={classes.home}>
      <SelectInput
        options={scienceList}
        selected={selected}
        onSelectScience={onSelectScience}
        onAddScience={onAddScience}
      />
    </div>
  );
};

export default Home;
