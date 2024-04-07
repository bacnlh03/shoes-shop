import React from "react";

const Divider = ({ props }) => {
  return (
    <hr
      {...props}
      style={{ borderTop: "0.5px solid black" }}
    />
  );
};

export default Divider;