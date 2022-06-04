import { useState } from "react";

const initialState = {
  user: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addUser = () => {
    setState({
      ...state,
      user: [...state.user],
    });
  };

  return {
    state,
  };
};

export default useInitialState;
