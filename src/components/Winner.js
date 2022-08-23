import React from "react";

function Winner({ props }) {
  console.log("Winner Check");
  return (
    <div className="win">
      <div>{props == "DRAW!!" ? `XO ${props}` : `${props} WIN!!`}</div>
      <q>Click board for restart.</q>
    </div>
  );
}

export default Winner;
