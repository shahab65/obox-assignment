import { useCallback, useState } from "react";

const useIsFocused = (initialState = false) => {
  const [isFocused, setIsFocused] = useState(initialState);
  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return { isFocused, onFocus, onBlur };
};

export default useIsFocused;
