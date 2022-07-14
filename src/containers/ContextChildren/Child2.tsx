import React from "react";
import { UserContext } from "../../App";
const Child2 = () => {
  return (
    <UserContext.Consumer>
      {({ isLoggedIn }) => <div>{isLoggedIn}</div>}
    </UserContext.Consumer>
  );
};

export default Child2;
