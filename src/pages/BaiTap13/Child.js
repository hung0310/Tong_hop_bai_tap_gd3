import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {

  return (
    <div className="d-flex justify-content-center align-items-center">
      <GrandChild />
    </div>
  );
};

export default Child;