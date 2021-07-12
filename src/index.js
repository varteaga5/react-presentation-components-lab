import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

ReactDOM.render(
  <div>
    <SimpleComponent />
    <br />
    <SimplerComponent
      handleClick={(e) => {
        console.log("timmay");
      }}
    />
  </div>,
  document.getElementById("root")
);
