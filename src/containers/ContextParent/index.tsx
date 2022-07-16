import { createContext } from "react";
import Child1 from "../ContextChildren/Child1";
import Child2 from "../ContextChildren/Child2";

export const UserContext = createContext({
  isLoggedIn: true,
});

const ContextParent = () => {
  return (
    <UserContext.Provider value={{ isLoggedIn: false }}>
      <Child1 />
      <Child2 />
    </UserContext.Provider>
  );
};

export default ContextParent;
