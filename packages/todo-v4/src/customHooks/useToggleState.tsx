import { useState } from "react";

const useToggleState = (
  initialState: boolean = false
): [boolean, () => void] => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(!state);
  return [state, toggle];
};

useToggleState.displayName = "useToggleState";
export default useToggleState;
