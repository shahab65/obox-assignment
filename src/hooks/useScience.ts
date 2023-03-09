import { useCallback, useState } from "react";
import scienceMockData from "mock/scienceMockData";

const useScience = (initialState = false) => {
  const [scienceList, setScienceList] = useState(scienceMockData);
  // const onFocus = useCallback(() => {
  //   setIsFocused(true);
  // }, []);
  // const onBlur = useCallback(() => {
  //   setIsFocused(false);
  // }, []);

  return { scienceList };
};

export default useScience;
