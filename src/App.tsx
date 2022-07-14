// import FolderComponent from "./components/FolderComponent";
// import FolderData from "./Data/FolderData";
// import Photo from "./containers/Photo";
import "./style.scss";
import React, { useEffect, createContext, useLayoutEffect } from "react";
import Child1 from "./containers/ContextChildren/Child1";
import Child2 from "./containers/ContextChildren/Child2";
import StopWatch from "./hooks/useReducer";
import Factorial from "./hooks/useMemo";
export const UserContext = createContext({
  isLoggedIn: false,
});

const App = () => {
  return (
    <>
      <UserContext.Provider value={{ isLoggedIn: false }}>
        {/* <Child1 />
        <Child2 /> */}
        {/* <StopWatch /> use reducer */}
        <Factorial /> {/* use memo */}
        {/* <Photo />
       <FolderComponent explorer={FolderData} /> */}
      </UserContext.Provider>
    </>
  );
};

export default App;
