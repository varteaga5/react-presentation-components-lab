// Code SimplerComponent Here
import React, { Component } from "react";

const SimplerComponent = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <button>"I am just happy"</button>
    </div>
  );
};

export default SimplerComponent;
