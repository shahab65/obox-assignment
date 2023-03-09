import { useCallback, useState } from "react";
import scienceMockData from "mock/scienceMockData";
import generateId from "../utils/generateId";

const useScience = (initialState = false) => {
  const [scienceList, setScienceList] = useState(scienceMockData);
  const [selected, setSelected] = useState("0");
  const onSelectScience = (id: string) => {
    setSelected(id);
  };
  const onAddScience = (name: string) => {
    const id = generateId();
    const newScience = { id, name };
    setScienceList((prev) => [...prev, newScience]);
  };

  return { scienceList, selected, onSelectScience, onAddScience };
};

export default useScience;
