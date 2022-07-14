import React from "react";
import { UserContext } from "../../App";

const Child1 = () => {
  return (
    <UserContext.Consumer>
      {(props) => {
        return <div></div>;
      }}
    </UserContext.Consumer>
  );
};

export default Child1;
