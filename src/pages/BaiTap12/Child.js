import React from "react";
import { useCount } from "./CountContext";

const Child = () => {
  const { state } = useCount();
  return <h1>Value: {state.count}</h1>;
};

export default Child;