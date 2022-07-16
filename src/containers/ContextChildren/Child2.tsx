import React from "react";
import { UserContext } from "../ContextParent";
const Child2 = () => {
  return (
    <UserContext.Consumer>
      {({ isLoggedIn }) => <div>{isLoggedIn}</div>}
    </UserContext.Consumer>
  );
};

export default Child2;
