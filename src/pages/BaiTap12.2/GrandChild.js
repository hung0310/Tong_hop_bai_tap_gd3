import React from "react";
import { useCount } from "./DataContext";

const GrandChild = () => {
  const { state } = useCount();
  return <h1>Value: {state.count}</h1>;
};

export default GrandChild;