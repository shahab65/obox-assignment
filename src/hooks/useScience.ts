import { useCallback, useState } from "react";
import scienceMockData from "mock/scienceMockData";

const useScience = (initialState = false) => {
  const [scienceList, setScienceList] = useState(scienceMockData);
  const [selected, setSelected] = useState(0);
  const onSelectScience = (id: number) => {
    setSelected(id);
  };
  // const onFocus = useCallback(() => {
  //   setIsFocused(true);
  // }, []);
  // const onBlur = useCallback(() => {
  //   setIsFocused(false);
  // }, []);

  return { scienceList, selected, onSelectScience };
};

export default useScience;
